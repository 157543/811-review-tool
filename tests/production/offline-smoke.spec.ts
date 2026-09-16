import { expect, test } from '@playwright/test';

test('precache makes the full study flow available offline',async({page,context})=>{
  await page.goto('/');
  await expect(page.getByRole('heading',{name:/把公式认准/})).toBeVisible();
  await expect(page.locator('.masthead aside strong')).toContainText('305 / 305');
  await expect(page.locator('link[rel="manifest"]')).toHaveAttribute('href',/manifest\.webmanifest$/);

  await page.evaluate(async()=>{
    await navigator.serviceWorker.ready;
    if(navigator.serviceWorker.controller) return;
    await new Promise<void>(resolve=>navigator.serviceWorker.addEventListener('controllerchange',()=>resolve(),{once:true}));
  });
  await expect(page.getByText('已可离线使用',{exact:true})).toBeVisible();

  await context.setOffline(true);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.getByRole('heading',{name:/把公式认准/})).toBeVisible();
  await expect(page.locator('.masthead aside strong')).toContainText('305 / 305');
  await expect(page.getByText('当前离线')).toBeVisible();
  await page.getByRole('button',{name:'5',exact:true}).click();
  await page.getByRole('button',{name:/公式与变换对/}).click();
  await expect(page.locator('.question-card h1')).toBeVisible();
  await expect(page.locator('.question-card .katex').first()).toBeVisible();
  await context.setOffline(false);
});
