import { expect, test } from '@playwright/test';

test('production release supports chapter entry, answering, recovery and mistake book',async({page})=>{
  await page.goto('/');
  await expect(page.getByRole('heading',{name:/把公式认准/})).toBeVisible();
  await expect(page.getByText('正式题库',{exact:true})).toBeVisible();
  await expect(page.locator('.masthead aside strong')).toContainText('305 / 305');

  for(const chapter of [1,2,3,4,5]) {
    await page.locator('.filter-panel').evaluate(element=>{(element as HTMLDetailsElement).open=true;});
    await page.getByRole('button',{name:`第 ${chapter} 章`}).click();
    await page.getByRole('button',{name:/按章节复习/}).click();
    await expect(page.locator('.question-card .meta')).toContainText(`第 ${chapter} 章`);
    await expect(page.locator('.question-card')).not.toContainText(/scut811-p1-|family_id|needs_manual_check|reviewed|KEY_EXERCISE|SIGN_ERROR/);
    await page.getByRole('button',{name:'← 暂停'}).click();
    await page.getByRole('button',{name:'清空筛选'}).click();
  }

  await page.getByRole('button',{name:'5',exact:true}).click();
  await page.getByRole('button',{name:/今日 10 题/}).click();
  const firstStem=await page.locator('.question-card h1').textContent();
  const firstOption=page.getByRole('button',{name:'选项 A'});
  await firstOption.click();
  await expect(firstOption).toHaveClass(/selected/);
  await page.getByLabel('我不确定').check();
  await expect(firstOption).toHaveClass(/selected/);
  await page.getByRole('button',{name:'提交答案'}).click();
  await expect(page.getByText('正确答案：')).toBeVisible();
  await expect(page.getByText('短解析',{exact:true})).toBeVisible();
  await expect(page.getByText('易错点',{exact:true})).toBeVisible();
  await page.reload();
  await expect(page.getByText('已恢复上次未完成的会话，题目顺序和进度保持不变。')).toBeVisible();
  await expect(page.locator('.question-card h1')).toHaveText(firstStem!);
  await page.getByRole('button',{name:'概念没理解'}).click();
  await page.getByRole('button',{name:'下一题'}).click();
  await page.getByRole('button',{name:'← 暂停'}).click();
  await page.getByRole('button',{name:/错题本/}).click();
  await expect(page.getByRole('heading',{name:'错题本'})).toBeVisible();
  await expect(page.getByText('不确定').first()).toBeVisible();
});
