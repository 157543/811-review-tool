import { expect, test } from '@playwright/test';

test('formal release loads all 305 questions without internal review terminology',async({page})=>{
  await page.goto('/');
  await expect(page.getByText('正式题库',{exact:true})).toBeVisible();
  await expect(page.locator('.masthead aside strong')).toContainText('305 / 305');
  await page.getByRole('button',{name:'5',exact:true}).click();
  await page.getByRole('button',{name:/今日 5 题/}).click();
  await expect(page.locator('.question-card h1')).toBeVisible();
  await expect(page.locator('.question-card .meta')).toBeVisible();
  await expect(page.locator('.question-card')).not.toContainText(/scut811-p1-|needs_manual_check|reviewed|KEY_EXERCISE/);
  await page.getByRole('button',{name:'← 暂停'}).click();
  await expect(page.locator('.masthead aside strong')).toContainText('305 / 305');
  await expect(page.getByText('题库模式')).toHaveCount(0);
  await expect(page.locator('body')).not.toContainText(/Reviewed|Beta|Release/);
  await expect(page.getByRole('region',{name:'今日学习概况'})).toBeVisible();
});
