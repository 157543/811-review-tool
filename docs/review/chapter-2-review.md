# 第2章人工审题（45题）

> 当前状态：reviewed=45。内容审核门槛：正确答案正确、题干无实质歧义、无明显错误知识、无严重重复或低价值题。来源和 machine error tag 的精细问题不阻塞 reviewed，但 verified 仍须最终核验。

## scut811-p1-q0048｜2.1｜concept

**知识点：** kp-2.1 离散时间LTI与卷积和

**题干：** 两个有限长序列分别在 \(0\le n\le L_x-1\) 与 \(0\le n\le L_h-1\) 非零，其卷积长度通常是多少？

- A. \(L_x+L_h\) · `WRONG_SUPPORT_INTERVAL`
- B. \(\max(L_x,L_h)\) · `WRONG_SUPPORT_INTERVAL`
- C. \(L_xL_h\) · `WRONG_SUPPORT_INTERVAL`
- D. \(L_x+L_h-1\) ✅

**解析：** 正确：支撑端点相加，非零索引从0到 \(L_x+L_h-2\)，共 \(L_x+L_h-1\) 点。错项混淆端点与点数。易错点：长度要在最大索引基础上再加1。

**来源：** 基于重点习题2.4（有限矩形序列卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.4
- OPPENHEIM-2E-LIU-01｜习题2.4｜PDF 110｜印刷页 87｜题号 2.4

---

## scut811-p1-q0049｜2.1｜concept

**知识点：** kp-2.1 离散时间LTI与卷积和

**题干：** 离散卷积的交换性表示为哪一项？

- A. \(x[n]*h[n]=h[n]*x[n]\) ✅
- B. \(x[n]*h[n]=x[n]h[n]\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- C. \(x[n]*h[n]=h[-n]*x[n]\) · `MISSING_TIME_REVERSAL`
- D. \(x[n]*h[n]=x[-n]*h[-n]\) · `WRONG_CONVOLUTION_INDEX`

**解析：** 正确：交换两个序列不改变卷积和。错项把卷积写成乘积或引入额外反转。易错点：定义式中可以换元证明交换性。

**来源：** 基于重点习题2.6（指数、阶跃序列卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.6
- OPPENHEIM-2E-LIU-01｜习题2.6｜PDF 110｜印刷页 87｜题号 2.6

---

## scut811-p1-q0050｜2.1｜formula

**知识点：** kp-2.1 离散时间LTI与卷积和

**题干：** 序列与移位冲激卷积：\(x[n]*\delta[n-n_0]\) 等于什么？

- A. \(x[n_0]\) · `WRONG_CONVOLUTION_INDEX`
- B. \(x[n-n_0]\) ✅
- C. \(x[n+n_0]\) · `WRONG_SHIFT_DIRECTION`
- D. \(x[n]\delta[n-n_0]\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`

**解析：** 正确：移位冲激在卷积中把序列整体延迟 \(n_0\)。错项写反平移、混淆相乘或只做取样。易错点：与冲激相乘是取样，与冲激卷积是移位。

**来源：** 基于重点习题2.4（有限矩形序列卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.4
- OPPENHEIM-2E-LIU-01｜习题2.4｜PDF 110｜印刷页 87｜题号 2.4

---

## scut811-p1-q0051｜2.1｜error_discrimination

**知识点：** kp-2.1 离散时间LTI与卷积和

**题干：** 卷积和 \(\sum_k x[k]h[n-k]\) 中，学生把 \(h[n-k]\) 改成 \(h[k-n]\)。核心错误是什么？

- A. 仅少了一个尺度因子 · `MISS_SCALE_FACTOR`
- B. 连续时间才需要翻转，离散时间不需要 · `CONFUSE_CT_DT`
- C. 翻转方向改变，所得一般不是原卷积 ✅
- D. 只是更换求和变量，结果总相同 · `WRONG_CONVOLUTION_INDEX`

**解析：** 正确：\(h[n-k]\) 与 \(h[k-n]\) 的反转和平移方向不同，不能直接互换。错项把结构变化当作哑变量替换。易错点：换元时必须同时改变整个被积式和范围。

**来源：** 基于重点习题2.4（有限矩形序列卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.4
- OPPENHEIM-2E-LIU-01｜习题2.4｜PDF 110｜印刷页 87｜题号 2.4

---

## scut811-p1-q0052｜2.1｜error_discrimination

**知识点：** kp-2.1 离散时间LTI与卷积和

**题干：** 学生写 \(y[n]=\sum_k x[n-k]h[n-k]\) 作为卷积。主要问题是什么？

- A. 只需把求和改成积分 · `CONFUSE_CT_DT`
- B. 应该再乘 \(2\pi\) · `MISSING_2PI`
- C. 卷积不能使用变量 \(k\) · `WRONG_CONVOLUTION_INDEX`
- D. 两个信号都被同样移位，缺少固定的 \(x[k]\) 或 \(h[k]\) ✅

**解析：** 正确：标准卷积中一个序列以 \(k\) 取样，另一个翻转平移。错项没有修复两个因子同时随 \(n-k\) 变化。易错点：不要让两个因子都承担同一个滑动。

**来源：** 基于重点习题2.6（指数、阶跃序列卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.6
- OPPENHEIM-2E-LIU-01｜习题2.6｜PDF 110｜印刷页 87｜题号 2.6

---

## scut811-p1-q0053｜2.1｜error_discrimination

**知识点：** kp-2.1 离散时间LTI与卷积和

**题干：** 若 \(x[n]\) 仅在 \(1\le n\le3\) 非零，\(h[n]\) 仅在 \(-2\le n\le0\) 非零，则卷积可能非零的区间是什么？

- A. \(-1\le n\le3\) ✅
- B. \(1\le n\le3\) · `WRONG_SUPPORT_INTERVAL`
- C. \(-2\le n\le0\) · `WRONG_SUPPORT_INTERVAL`
- D. \(-3\le n\le3\) · `WRONG_SUPPORT_INTERVAL`

**解析：** 正确：卷积支撑端点分别相加，起点 \(1+(-2)=-1\)，终点 \(3+0=3\)。错项只保留某一支撑或错误扩展。易错点：支撑区间做Minkowski和。

**来源：** 基于重点习题2.7（线性系统的脉冲分解；辨别时变情形）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.7
- OPPENHEIM-2E-LIU-01｜习题2.7｜PDF 110｜印刷页 87｜题号 2.7

---

## scut811-p1-q0054｜2.1｜error_discrimination

**知识点：** kp-2.1 离散时间LTI与卷积和

**题干：** 对 \(x[n]=u[n]\)、\(h[n]=u[n]\)，卷积 \(y[n]\) 是哪一个？

- A. \(u[-n]\) · `WRONG_SHIFT_DIRECTION`
- B. \((n+1)u[n]\) ✅
- C. \(u[n]\) · `FORGOT_INTEGRATION`
- D. \(nu[n]\) · `WRONG_CONVOLUTION_INDEX`

**解析：** 正确：当 \(n\ge0\) 时可相加的整数索引有 \(n+1\) 个。错项忘记累加点数、少算端点或反转支撑。易错点：离散求和包含两个端点。

**来源：** 基于重点习题2.24（因果LTI级联、求未知脉冲响应与输出）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.24
- OPPENHEIM-2E-LIU-01｜习题2.24｜PDF 112｜印刷页 89｜题号 2.24

---

## scut811-p1-q0055｜2.2｜concept

**知识点：** kp-2.2 连续时间LTI与卷积积分

**题干：** 若两个连续信号的非零支撑分别为 \([a,b]\) 与 \([c,d]\)，其卷积支撑至多位于哪里？

- A. \([\min(a,c),\max(b,d)]\) · `WRONG_SUPPORT_INTERVAL`
- B. \([ac,bd]\) · `WRONG_SUPPORT_INTERVAL`
- C. \([a+c,b+d]\) ✅
- D. \([a-c,b-d]\) · `WRONG_SUPPORT_INTERVAL`

**解析：** 正确：卷积中可重叠位置由两支撑端点相加决定。错项使用相减、并集或乘积。易错点：先用支撑和可快速排除大量答案。

**来源：** 基于重点习题2.12（连续指数信号与冲激列卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.12
- OPPENHEIM-2E-LIU-01｜习题2.12｜PDF 111｜印刷页 88｜题号 2.12

---

## scut811-p1-q0056｜2.2｜concept

**知识点：** kp-2.2 连续时间LTI与卷积积分

**题干：** 若 \(y(t)=x(t)*h(t)\)，且相关积分存在，则 \(y(t)\) 的总面积满足什么关系？

- A. \(\int y(t)dt=\int x(t)dt+\int h(t)dt\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- B. \(\int y(t)dt=\int x(t)h(t)dt\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- C. \(\int y(t)dt=0\) · `FORGOT_INTEGRATION`
- D. \(\int y(t)dt=(\int x(t)dt)(\int h(t)dt)\) ✅

**解析：** 正确：交换积分次序后，卷积的总面积等于两信号总面积之积。错项把卷积当加法、内积或无条件判零。易错点：这是用面积快速验算卷积结果的方法。

**来源：** 基于重点习题2.40（积分型系统的冲激响应及矩形输入）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.40
- OPPENHEIM-2E-LIU-01｜习题2.40｜PDF 116｜印刷页 93｜题号 2.40

---

## scut811-p1-q0057｜2.2｜formula

**知识点：** kp-2.2 连续时间LTI与卷积积分

**题干：** 连续时间卷积积分的标准形式是哪一个？

- A. \(y(t)=\int_{-\infty}^{\infty}x(\tau)h(t-\tau)d\tau\) ✅
- B. \(y(t)=\int x(t)h(t)dt\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- C. \(y(t)=\int x(t-\tau)h(t-\tau)d\tau\) · `BOTH_SIGNALS_SHIFTED`
- D. \(y(t)=\sum_kx[k]h[n-k]\) · `CONFUSE_CT_DT`

**解析：** 正确：积分变量为 \(\tau\)，一个信号固定为 \(x(\tau)\)，另一个写成 \(h(t-\tau)\)。错项混淆乘积、同时移位或离散卷积。易错点：积分结果只保留变量 \(t\)。

**来源：** 基于重点习题2.12（连续指数信号与冲激列卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.12
- OPPENHEIM-2E-LIU-01｜习题2.12｜PDF 111｜印刷页 88｜题号 2.12

---

## scut811-p1-q0058｜2.2｜formula

**知识点：** kp-2.2 连续时间LTI与卷积积分

**题干：** 矩形脉冲 \(x(t)=u(t)-u(t-1)\) 与自身卷积在 \(0\le t\le1\) 时等于什么？

- A. \(y(t)=t^2\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- B. \(y(t)=t\) ✅
- C. \(y(t)=1-t\) · `WRONG_SHIFT_DIRECTION`
- D. \(y(t)=1\) · `FORGOT_INTEGRATION`

**解析：** 正确：在 \(0\le t\le1\) 时两单位宽矩形的重叠长度为 \(t\)。错项使用下降段、忽略重叠长度或错误相乘。易错点：卷积值等于“重叠面积”，分段点由支撑端点决定。

**来源：** 基于重点习题2.40（积分型系统的冲激响应及矩形输入）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.40
- OPPENHEIM-2E-LIU-01｜习题2.40｜PDF 116｜印刷页 93｜题号 2.40

---

## scut811-p1-q0059｜2.2｜error_discrimination

**知识点：** kp-2.2 连续时间LTI与卷积积分

**题干：** 把 \(h(t-\tau)\) 画成 \(\tau\) 的函数时，哪一步不可省略？

- A. 把两个信号都向右移 \(t\) · `BOTH_SIGNALS_SHIFTED`
- B. 把积分改为求和 · `CONFUSE_CT_DT`
- C. 先把 \(h(\tau)\) 关于原点翻转 ✅
- D. 先对幅度取平方 · `FORGOT_MAGNITUDE_SQUARED`

**解析：** 正确：\(h(t-\tau)=h[-(\tau-t)]\)，必须包含时间反转。错项引入无关平方、双重移位或离散化。易错点：翻转相对于积分变量 \(\tau\) 进行。

**来源：** 基于重点习题2.12（连续指数信号与冲激列卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.12
- OPPENHEIM-2E-LIU-01｜习题2.12｜PDF 111｜印刷页 88｜题号 2.12

---

## scut811-p1-q0060｜2.2｜error_discrimination

**知识点：** kp-2.2 连续时间LTI与卷积积分

**题干：** 在 \(y(t)=\int x(\tau)h(t-\tau)d\tau\) 中，作图滑动的参数是哪一个？

- A. \(\tau\) · `WRONG_CONVOLUTION_INDEX`
- B. \(t-\tau\) · `WRONG_CONVOLUTION_INDEX`
- C. 积分结果没有自变量 · `CONFUSE_CT_DT`
- D. \(t\) ✅

**解析：** 正确：\(\tau\) 是积分变量，\(t\) 决定翻转信号的滑动位置。错项混淆了哑变量与输出变量。易错点：积分结束后 \(\tau\) 必须消失。

**来源：** 基于重点习题2.40（积分型系统的冲激响应及矩形输入）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.40
- OPPENHEIM-2E-LIU-01｜习题2.40｜PDF 116｜印刷页 93｜题号 2.40

---

## scut811-p1-q0061｜2.2｜error_discrimination

**知识点：** kp-2.2 连续时间LTI与卷积积分

**题干：** 若 \(x(t)\) 支撑在 \([0,2]\)，\(h(t)\) 支撑在 \([1,4]\)，学生称卷积从 \(t=1\) 到 \(t=4\) 非零。错误是什么？

- A. 终点应为 \(2+4=6\)，支撑为 \([1,6]\) ✅
- B. 起点应为-1，终点应为2 · `WRONG_SUPPORT_INTERVAL`
- C. 支撑应取两区间交集 \([1,2]\) · `WRONG_SUPPORT_INTERVAL`
- D. 卷积没有有限支撑 · `WRONG_SUPPORT_INTERVAL`

**解析：** 正确：卷积支撑端点相加，起点0+1，终点2+4。错项只沿用某一输入支撑或取交集。易错点：卷积支撑不是普通区间交集。

**来源：** 基于重点习题2.12（连续指数信号与冲激列卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.12
- OPPENHEIM-2E-LIU-01｜习题2.12｜PDF 111｜印刷页 88｜题号 2.12

---

## scut811-p1-q0062｜2.2｜error_discrimination

**知识点：** kp-2.2 连续时间LTI与卷积积分

**题干：** 对任意信号 \(x(t)\)，\(x(t)*\delta(t+2)\) 等于什么？

- A. \(x(-2)\delta(t+2)\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- B. \(x(t+2)\) ✅
- C. \(x(t-2)\) · `WRONG_SHIFT_DIRECTION`
- D. \(x(-t+2)\) · `MISSING_TIME_REVERSAL`

**解析：** 正确：与位于 \(-2\) 的冲激卷积使信号提前2。错项写反平移、额外反转或混淆冲激相乘。易错点：\(\delta(t-t_0)\) 卷积得到 \(x(t-t_0)\)。

**来源：** 基于重点习题2.40（积分型系统的冲激响应及矩形输入）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.40
- OPPENHEIM-2E-LIU-01｜习题2.40｜PDF 116｜印刷页 93｜题号 2.40

---

## scut811-p1-q0063｜2.2｜error_discrimination

**知识点：** kp-2.2 连续时间LTI与卷积积分

**题干：** 学生将 \(\frac{d}{dt}[x(t)*h(t)]\) 写成 \(x(t)h(t)\)。正确关系是什么？

- A. 等于 \(x(t)*h(t)\)，微分无影响 · `OUTPUT_NOT_DIFFERENTIATED`
- B. 只能写成 \(x^{\prime}(t)*h^{\prime}(t)\) · `WRONG_DIFFERENTIATION_FACTOR`
- C. 可写成 \(x^{\prime}(t)*h(t)\) 或 \(x(t)*h^{\prime}(t)\) ✅
- D. 等于 \(x^{\prime}(t)h^{\prime}(t)\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`

**解析：** 正确：卷积微分可把一次微分作用到任一因子。错项把卷积改成乘积、漏微分或让两边同时微分。易错点：总共只增加一次微分。

**来源：** 基于重点习题2.12（连续指数信号与冲激列卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.12
- OPPENHEIM-2E-LIU-01｜习题2.12｜PDF 111｜印刷页 88｜题号 2.12

---

## scut811-p1-q0064｜2.2｜error_discrimination

**知识点：** kp-2.2 连续时间LTI与卷积积分

**题干：** 两单位面积矩形脉冲卷积后，输出总面积应是多少？

- A. \(2\) · `MISS_FACTOR_2`
- B. \(1/2\) · `MISS_SCALE_FACTOR`
- C. 必须为0 · `FORGOT_INTEGRATION`
- D. \(1\) ✅

**解析：** 正确：卷积总面积等于两个输入面积之积，即1。错项把面积相加、平均或误判抵消。易错点：峰值可能改变，但总面积仍由面积乘积决定。

**来源：** 基于重点习题2.40（积分型系统的冲激响应及矩形输入）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.40
- OPPENHEIM-2E-LIU-01｜习题2.40｜PDF 116｜印刷页 93｜题号 2.40

---

## scut811-p1-q0065｜2.2｜error_discrimination

**知识点：** kp-2.2 连续时间LTI与卷积积分

**题干：** 若 \(x(t)\) 与 \(h(t)\) 都是实偶信号，则它们的卷积具有什么对称性？

- A. 仍为实偶信号 ✅
- B. 必为实奇信号 · `SIGN_ERROR`
- C. 一般为复信号 · `IGNORED_CONJUGATE_SYMMETRY`
- D. 必为因果信号 · `CAUSALITY_ERROR`

**解析：** 正确：偶函数卷积保持偶性，实信号卷积仍实。错项混淆奇偶、实复与因果性。易错点：偶信号若非零通常不因果。

**来源：** 基于重点习题2.12（连续指数信号与冲激列卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.12
- OPPENHEIM-2E-LIU-01｜习题2.12｜PDF 111｜印刷页 88｜题号 2.12

---

## scut811-p1-q0066｜2.3｜concept

**知识点：** kp-2.3 LTI系统性质

**题干：** 两个LTI系统串联时，总冲激响应是什么？

- A. \(h(t)=h_1(t)-h_2(t)\) · `SIGN_ERROR`
- B. \(h(t)=h_1(t)*h_2(t)\) ✅
- C. \(h(t)=h_1(t)h_2(t)\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- D. \(h(t)=h_1(t)+h_2(t)\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`

**解析：** 正确：第一级输出再与第二级冲激响应卷积，合成为两冲激响应的卷积。错项把串联误作乘积或加减。易错点：频域串联才是频率响应相乘。

**来源：** 基于重点习题2.16（卷积支撑区间、时移与反转辨析）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.16
- OPPENHEIM-2E-LIU-01｜习题2.16｜PDF 111｜印刷页 88｜题号 2.16

---

## scut811-p1-q0067｜2.3｜concept

**知识点：** kp-2.3 LTI系统性质

**题干：** 离散时间LTI系统因果的充要条件是什么？

- A. \(h[0]=0\) · `CAUSALITY_ERROR`
- B. \(\sum_n|h[n]|<\infty\) · `CAUSALITY_ERROR`
- C. \(h[n]=0\)，对所有 \(n<0\) ✅
- D. \(h[n]=0\)，对所有 \(n>0\) · `CAUSALITY_ERROR`

**解析：** 正确：因果输出只能使用当前和过去输入，因此冲激响应负时间部分必须为0。错项写反支撑或混入稳定条件。易错点：绝对可和对应BIBO稳定，不是因果。

**来源：** 基于重点习题2.45（导数响应、冲激响应与阶跃响应关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.45
- OPPENHEIM-2E-LIU-01｜习题2.45｜PDF 117｜印刷页 94｜题号 2.45

---

## scut811-p1-q0068｜2.3｜concept

**知识点：** kp-2.3 LTI系统性质

**题干：** 连续时间LTI系统BIBO稳定的充要条件是什么？

- A. \(\int h(t)dt=0\) · `CONFUSE_ENERGY_POWER`
- B. \(h(t)=0\) 对 \(t<0\) · `CAUSALITY_ERROR`
- C. \(\int |h(t)|^2dt<\infty\) · `FORGOT_MAGNITUDE_SQUARED`
- D. \(\int_{-\infty}^{\infty}|h(t)|dt<\infty\) ✅

**解析：** 正确：冲激响应绝对可积保证任意有界输入产生有界输出。错项混入零面积、因果或能量条件。易错点：稳定性需要绝对值的一次积分。

**来源：** 基于重点习题2.46（输入导数与响应的关系、恢复冲激响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.46
- OPPENHEIM-2E-LIU-01｜习题2.46｜PDF 118｜印刷页 95｜题号 2.46

---

## scut811-p1-q0069｜2.3｜concept

**知识点：** kp-2.3 LTI系统性质

**题干：** LTI系统对复指数输入 \(e^{st}\) 的零状态响应具有什么形式？

- A. \(H(s)e^{st}\)，若相应积分收敛 ✅
- B. \(H(t)e^{st}\) · `INVALID_TIME_SCALING_FOR_LTI`
- C. \(e^{H(s)t}\) · `LINEARITY_ERROR`
- D. \(H(s+t)\) · `TIME_INVARIANCE_ERROR`

**解析：** 正确：复指数是LTI系统的特征函数，系统只改变复幅度。错项混淆频率响应、自变量和指数结构。易错点：必须同时注意收敛条件。

**来源：** 基于重点习题2.16（卷积支撑区间、时移与反转辨析）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.16
- OPPENHEIM-2E-LIU-01｜习题2.16｜PDF 111｜印刷页 88｜题号 2.16

---

## scut811-p1-q0070｜2.3｜formula

**知识点：** kp-2.3 LTI系统性质

**题干：** 两个LTI系统并联后输出相加，总冲激响应是多少？

- A. \(h_1(t)-h_2(t)\) · `SIGN_ERROR`
- B. \(h(t)=h_1(t)+h_2(t)\) ✅
- C. \(h_1(t)*h_2(t)\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- D. \(h_1(t)h_2(t)\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`

**解析：** 正确：并联支路对同一输入分别响应，输出相加，对应冲激响应相加。错项把并联与串联或频域乘法混淆。易错点：串联卷积，并联相加。

**来源：** 基于重点习题2.16（卷积支撑区间、时移与反转辨析）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.16
- OPPENHEIM-2E-LIU-01｜习题2.16｜PDF 111｜印刷页 88｜题号 2.16

---

## scut811-p1-q0071｜2.3｜formula

**知识点：** kp-2.3 LTI系统性质

**题干：** 若LTI系统阶跃响应为 \(s(t)=(1-e^{-2t})u(t)\)，其冲激响应为哪一个？

- A. \(h(t)=-2e^{-2t}u(t)\) · `SIGN_ERROR`
- B. \(h(t)=\frac12e^{-2t}u(t)\) · `MISS_SCALE_FACTOR`
- C. \(h(t)=2e^{-2t}u(t)\) ✅
- D. \(h(t)=(1-e^{-2t})u(t)\) · `OUTPUT_NOT_DIFFERENTIATED`

**解析：** 正确：\(h=ds/dt\)；该阶跃响应在原点连续且 \(s(0)=0\)，没有附加冲激项。错项漏微分、符号错或系数倒置。易错点：若阶跃响应在原点有跳变，微分还会产生冲激。

**来源：** 基于重点习题2.45（导数响应、冲激响应与阶跃响应关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.45
- OPPENHEIM-2E-LIU-01｜习题2.45｜PDF 117｜印刷页 94｜题号 2.45

---

## scut811-p1-q0072｜2.3｜error_discrimination

**知识点：** kp-2.3 LTI系统性质

**题干：** 学生认为“任意LTI系统都可把 \(x(at)\) 的输出写成 \(y(at)/|a|\)”。问题在哪里？

- A. 只需去掉 \(|a|\)，写成 \(y(at)\) · `INVALID_TIME_SCALING_FOR_LTI`
- B. 该结论只对离散时间成立 · `CONFUSE_CT_DT`
- C. LTI系统不能处理缩放后的输入 · `INVALID_TIME_SCALING_FOR_LTI`
- D. LTI只保证时移与线性，通常不保证时间尺度变换可交换 ✅

**解析：** 正确：时间尺度性质属于傅里叶变换，不是一般LTI映射性质。错项只是修改系数或换时间类型。易错点：不要把变换性质直接当系统性质。

**来源：** 基于重点习题2.16（卷积支撑区间、时移与反转辨析）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.16
- OPPENHEIM-2E-LIU-01｜习题2.16｜PDF 111｜印刷页 88｜题号 2.16

---

## scut811-p1-q0073｜2.3｜error_discrimination

**知识点：** kp-2.3 LTI系统性质

**题干：** 某离散LTI系统 \(h[n]=(2)^nu[n]\)。学生因其因果而判定稳定。正确结论是什么？

- A. 因果但不稳定，因为 \(\sum_n|h[n]|\) 发散 ✅
- B. 因果且稳定，因为 \(h[n]\) 有单位阶跃 · `CAUSALITY_ERROR`
- C. 非因果但稳定 · `CAUSALITY_ERROR`
- D. 是否稳定只看 \(h[0]\) · `CONFUSE_ENERGY_POWER`

**解析：** 正确：支撑在 \(n\ge0\) 保证因果，但绝对和发散所以不稳定。错项把因果当稳定或只看单点。易错点：因果性与稳定性是独立条件。

**来源：** 基于重点习题2.45（导数响应、冲激响应与阶跃响应关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.45
- OPPENHEIM-2E-LIU-01｜习题2.45｜PDF 117｜印刷页 94｜题号 2.45

---

## scut811-p1-q0074｜2.3｜error_discrimination

**知识点：** kp-2.3 LTI系统性质

**题干：** 已知 \(x(t)\to y(t)\) 通过LTI系统。对输入 \(x^{\prime}(t)\)，学生仍写输出 \(y(t)\)。正确改正是什么？

- A. 输出不变，因为系统时不变 · `OUTPUT_NOT_DIFFERENTIATED`
- B. 输出应为 \(y^{\prime}(t)\) ✅
- C. 输出应为 \(x^{\prime}(t)y(t)\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- D. 输出应为 \(\int y(t)dt\) · `FORGOT_INTEGRATION`

**解析：** 正确：输入微分可与LTI卷积交换，输出也需同阶微分。错项混淆乘积、积分或把时不变误解为输出不变。易错点：时不变指移位响应，不是对所有变换都不变。

**来源：** 基于重点习题2.46（输入导数与响应的关系、恢复冲激响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.46
- OPPENHEIM-2E-LIU-01｜习题2.46｜PDF 118｜印刷页 95｜题号 2.46

---

## scut811-p1-q0075｜2.3｜error_discrimination

**知识点：** kp-2.3 LTI系统性质

**题干：** 系统冲激响应 \(h(t)=e^{-t}u(-t)\) 的因果性与稳定性是什么？

- A. 非因果但稳定 · `CONFUSE_ENERGY_POWER`
- B. 因果但不稳定 · `CAUSALITY_ERROR`
- C. 非因果且不稳定 ✅
- D. 因果且稳定 · `CAUSALITY_ERROR`

**解析：** 正确：支撑在负时间所以非因果；当 \(t\to-\infty\) 时 \(e^{-t}\) 增长，绝对积分发散。错项只看指数符号或阶跃形式。易错点：判断衰减方向必须结合支撑区间。

**来源：** 基于重点习题2.16（卷积支撑区间、时移与反转辨析）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.16
- OPPENHEIM-2E-LIU-01｜习题2.16｜PDF 111｜印刷页 88｜题号 2.16

---

## scut811-p1-q0076｜2.4｜concept

**知识点：** kp-2.4 微分方程差分方程描述LTI

**题干：** 用常系数差分方程描述的系统，要直接视为LTI系统通常还需采用什么条件？

- A. 输入必须周期 · `WRONG_PERIOD`
- B. 输出必须为偶序列 · `IGNORED_CONJUGATE_SYMMETRY`
- C. 所有系数必须相等 · `LINEARITY_ERROR`
- D. 初始松弛（零初始条件） ✅

**解析：** 正确：非零初始状态会引入与输入无关的响应，破坏零状态LTI映射的直接表述。错项加入无关限制。易错点：频率响应通常针对零状态响应。

**来源：** 基于重点习题2.19（级联差分方程、合成系统和单位脉冲响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.19
- OPPENHEIM-2E-LIU-01｜习题2.19｜PDF 111｜印刷页 88｜题号 2.19

---

## scut811-p1-q0077｜2.4｜concept

**知识点：** kp-2.4 微分方程差分方程描述LTI

**题干：** 差分方程中的项 \(y[n-2]\) 在频域对应什么因子乘以 \(Y(e^{j\omega})\)？

- A. \(e^{-j2\omega}\) ✅
- B. \(e^{j2\omega}\) · `SIGN_ERROR`
- C. \(j2\omega\) · `CONFUSE_CT_DT`
- D. \(2e^{-j\omega}\) · `WRONG_DELAY_FACTOR`

**解析：** 正确：延迟2点对应乘 \(e^{-j2\omega}\)。错项写反符号、混用微分性质或把延迟当幅度。易错点：延迟次数进入指数。

**来源：** 基于重点习题2.19（级联差分方程、合成系统和单位脉冲响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.19
- OPPENHEIM-2E-LIU-01｜习题2.19｜PDF 111｜印刷页 88｜题号 2.19

---

## scut811-p1-q0078｜2.4｜formula

**知识点：** kp-2.4 微分方程差分方程描述LTI

**题干：** 零初始条件下，\(y[n]-ay[n-1]=x[n]\) 的频率响应是什么？

- A. \(\frac1{j\omega-a}\) · `CONFUSE_CT_DT`
- B. \(H(e^{j\omega})=\frac1{1-ae^{-j\omega}}\) ✅
- C. \(\frac1{1+ae^{-j\omega}}\) · `SIGN_ERROR`
- D. \(1-ae^{-j\omega}\) · `WRONG_DELAY_FACTOR`

**解析：** 正确：DTFT后 \(Y(1-ae^{-j\omega})=X\)，再取 \(Y/X\)。错项改错符号、漏取倒数或混用连续时间形式。易错点：先把所有输出项因子提到一起。

**来源：** 基于重点习题2.19（级联差分方程、合成系统和单位脉冲响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.19
- OPPENHEIM-2E-LIU-01｜习题2.19｜PDF 111｜印刷页 88｜题号 2.19

---

## scut811-p1-q0079｜2.4｜formula

**知识点：** kp-2.4 微分方程差分方程描述LTI

**题干：** 连续系统满足 \(y^{\prime}(t)+3y(t)=2x(t)\)，零初始时频率响应是哪一个？

- A. \(\frac{2}{j\omega-3}\) · `SIGN_ERROR`
- B. \(\frac{2}{e^{-j\omega}+3}\) · `CONFUSE_CT_DT`
- C. \(H(j\omega)=\frac{2}{j\omega+3}\) ✅
- D. \(\frac{j\omega+3}{2}\) · `WRONG_DIFFERENTIATION_FACTOR`

**解析：** 正确：微分对应乘 \(j\omega\)，所以 \((j\omega+3)Y=2X\)。错项取倒数错误、符号错或混入离散延迟。易错点：频率响应是输出与输入之比。

**来源：** 基于重点习题2.19（级联差分方程、合成系统和单位脉冲响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.19
- OPPENHEIM-2E-LIU-01｜习题2.19｜PDF 111｜印刷页 88｜题号 2.19

---

## scut811-p1-q0080｜2.4｜error_discrimination

**知识点：** kp-2.4 微分方程差分方程描述LTI

**题干：** 对 \(y[n]+\frac12y[n-1]=x[n-1]\)，学生把右侧变换写成 \(X(e^{j\omega})\)。漏掉了什么？

- A. 输出延迟因子 \(e^{j\omega}\) · `SIGN_ERROR`
- B. 幅度因子 \(1/2\) · `MISS_SCALE_FACTOR`
- C. 连续时间因子 \(j\omega\) · `CONFUSE_CT_DT`
- D. 输入延迟因子 \(e^{-j\omega}\) ✅

**解析：** 正确：\(x[n-1]\) 的DTFT是 \(e^{-j\omega}X\)。错项写反符号、混淆系数或时间类型。易错点：方程两侧每一个延迟都要单独变换。

**来源：** 基于重点习题2.19（级联差分方程、合成系统和单位脉冲响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.19
- OPPENHEIM-2E-LIU-01｜习题2.19｜PDF 111｜印刷页 88｜题号 2.19

---

## scut811-p1-q0081｜2.4｜error_discrimination

**知识点：** kp-2.4 微分方程差分方程描述LTI

**题干：** 学生由 \(y^{\prime}(t)+y(t)=x(t)\) 写出 \(H(j\omega)=j\omega+1\)。核心错误是什么？

- A. 把分母多项式当成频率响应，正确应取倒数 ✅
- B. 微分应对应 \(e^{-j\omega}\) · `CONFUSE_CT_DT`
- C. 常数1应写成 \(2\pi\) · `MISSING_2PI`
- D. 方程无法描述LTI系统 · `LINEARITY_ERROR`

**解析：** 正确：变换后 \((j\omega+1)Y=X\)，故 \(H=Y/X=1/(j\omega+1)\)。错项混用离散性质或无关常数。易错点：先明确频率响应定义是 \(Y/X\)。

**来源：** 基于重点习题2.19（级联差分方程、合成系统和单位脉冲响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.19
- OPPENHEIM-2E-LIU-01｜习题2.19｜PDF 111｜印刷页 88｜题号 2.19

---

## scut811-p1-q0082｜2.4｜error_discrimination

**知识点：** kp-2.4 微分方程差分方程描述LTI

**题干：** 若差分方程含 \(y[n+1]\)，学生直接判定系统必非因果。这个判断为何不充分？

- A. 因果性只由稳定性决定 · `CAUSALITY_ERROR`
- B. 可重新移位方程；因果性要看能否由当前/过去输入和过去输出递推 ✅
- C. 只要有输出项系统就因果 · `CAUSALITY_ERROR`
- D. 差分方程系统都非因果 · `CAUSALITY_ERROR`

**解析：** 正确：索引整体平移可能把超前输出改写为当前输出，不能只看单个符号。错项使用过度概括。易错点：先整理成可实现递推式再判断因果。

**来源：** 基于重点习题2.19（级联差分方程、合成系统和单位脉冲响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.19
- OPPENHEIM-2E-LIU-01｜习题2.19｜PDF 111｜印刷页 88｜题号 2.19

---

## scut811-p1-q0083｜2.4｜error_discrimination

**知识点：** kp-2.4 微分方程差分方程描述LTI

**题干：** 在非零初始状态下直接用 \(H=Y/X\) 求系统全部输出，遗漏了什么？

- A. 输入必须先时间反转 · `MISSING_TIME_REVERSAL`
- B. 输出必须取模平方 · `FORGOT_MAGNITUDE_SQUARED`
- C. 零输入响应或初始条件贡献 ✅
- D. 傅里叶变换的 \(2\pi\) 因子 · `MISSING_2PI`

**解析：** 正确：频率响应描述零状态输入输出关系，非零初始状态还会产生零输入响应。错项引入无关变换细节。易错点：先区分零状态响应与零输入响应。

**来源：** 基于重点习题2.19（级联差分方程、合成系统和单位脉冲响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.19
- OPPENHEIM-2E-LIU-01｜习题2.19｜PDF 111｜印刷页 88｜题号 2.19

---

## scut811-p1-q0084｜2.5｜concept

**知识点：** kp-2.5 奇异函数

**题干：** 单位斜坡 \(r(t)=tu(t)\) 的一阶导数是什么？

- A. \(\delta(t)\) · `CONFUSE_IMPULSE_STEP`
- B. \(t\delta(t)\) · `CONFUSE_IMPULSE_STEP`
- C. \(1\) · `WRONG_SUPPORT_INTERVAL`
- D. \(u(t)\) ✅

**解析：** 正确：分布意义下 \(d[tu(t)]/dt=u(t)+t\delta(t)=u(t)\)。错项把阶跃再微分、保留为普通常数或误解冲激乘积。易错点：\(t\delta(t)=0\)。

**来源：** 基于重点习题2.20（奇异函数的积分关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.20
- OPPENHEIM-2E-LIU-01｜习题2.20｜PDF 111｜印刷页 88｜题号 2.20

---

## scut811-p1-q0085｜2.5｜error_discrimination

**知识点：** kp-2.5 奇异函数

**题干：** 对 \(a\ne0\)，\(\delta(at)\) 的正确化简是什么？

- A. \(\delta(at)=\frac1{|a|}\delta(t)\) ✅
- B. \(\delta(at)=\frac1a\delta(t)\) · `MISSING_ABSOLUTE_VALUE`
- C. \(\delta(at)=|a|\delta(t)\) · `MISS_SCALE_FACTOR`
- D. \(\delta(at)=\delta(t-a)\) · `WRONG_SHIFT_DIRECTION`

**解析：** 正确：冲激尺度变化带来雅可比 \(1/|a|\)。错项漏绝对值、把因子倒置或误作平移。易错点：冲激尺度性质与普通函数不同。

**来源：** 基于重点习题2.20（奇异函数的积分关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.20
- OPPENHEIM-2E-LIU-01｜习题2.20｜PDF 111｜印刷页 88｜题号 2.20

---

## scut811-p1-q0086｜2.5｜error_discrimination

**知识点：** kp-2.5 奇异函数

**题干：** 表达式 \(t\delta(t)\) 等于什么？

- A. \(u(t)\) · `CONFUSE_IMPULSE_STEP`
- B. \(0\) ✅
- C. \(\delta(t)\) · `CONFUSE_IMPULSE_STEP`
- D. \(t\) · `FORGOT_INTEGRATION`

**解析：** 正确：冲激只在 \(t=0\) 取样，乘上的 \(t\) 在该点为0。错项忽略抽样性质或混淆阶跃。易错点：一般有 \(f(t)\delta(t)=f(0)\delta(t)\)。

**来源：** 基于重点习题2.20（奇异函数的积分关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.20
- OPPENHEIM-2E-LIU-01｜习题2.20｜PDF 111｜印刷页 88｜题号 2.20

---

## scut811-p1-q0087｜2.5｜error_discrimination

**知识点：** kp-2.5 奇异函数

**题干：** 信号 \(u(t+1)-u(t-2)\) 的导数是哪一个？

- A. \(u(t+1)-u(t-2)\) · `OUTPUT_NOT_DIFFERENTIATED`
- B. \(\delta(t+1)+\delta(t-2)\) · `SIGN_ERROR`
- C. \(\delta(t+1)-\delta(t-2)\) ✅
- D. \(\delta(t-1)-\delta(t+2)\) · `WRONG_SHIFT_DIRECTION`

**解析：** 正确：每个阶跃在原跳变位置产生同系数冲激。错项写反平移、漏微分或丢失负号。易错点：下降沿对应负冲激。

**来源：** 基于重点习题2.20（奇异函数的积分关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.20
- OPPENHEIM-2E-LIU-01｜习题2.20｜PDF 111｜印刷页 88｜题号 2.20

---

## scut811-p1-q0088｜2.5｜error_discrimination

**知识点：** kp-2.5 奇异函数

**题干：** 积分 \(\int_{-\infty}^{\infty}\delta^{\prime}(t)f(t)dt\) 的正确结果是什么？

- A. \(f^{\prime}(0)\) · `SIGN_ERROR`
- B. \(f(0)\) · `FORGOT_INTEGRATION`
- C. \(0\) · `CONFUSE_IMPULSE_STEP`
- D. \(-f^{\prime}(0)\) ✅

**解析：** 正确：分部积分给出冲激导数作用于测试函数时带负号。错项漏负号、降错阶数或误判为0。易错点：\(\delta^{\prime}\) 的抽样结果是导数并带负号。

**来源：** 基于重点习题2.20（奇异函数的积分关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题列表｜PDF 4｜印刷页 —｜题号 2.20
- OPPENHEIM-2E-LIU-01｜习题2.20｜PDF 111｜印刷页 88｜题号 2.20

---

## scut811-p1-sample-004｜2.1｜formula

**知识点：** kp-2.1 离散时间LTI与卷积和

**题干：** 离散时间卷积 \(y[n]=x[n]*h[n]\) 的定义式是哪一个？

- A. \(\displaystyle y[n]=\sum_{k=-\infty}^{\infty}x[k]h[k-n]\) · `WRONG_SHIFT_DIRECTION`
- B. \(\displaystyle y(t)=\int_{-\infty}^{\infty}x(\tau)h(t-\tau)d\tau\) · `CONFUSE_CT_DT`
- C. \(\displaystyle y[n]=\sum_{k=-\infty}^{\infty}x[n-k]h[n-k]\)
- D. \(\displaystyle y[n]=\sum_{k=-\infty}^{\infty}x[k]h[n-k]\) ✅

**解析：** 正确：卷积和固定一个序列为 \(x[k]\)，另一个写成翻转并移位后的 \(h[n-k]\)。错误项分别把移位方向写反、混入连续时间积分，或让两个序列同时随 \(n-k\) 变化。易错点：求和变量是 \(k\)，输出变量是 \(n\)。

**来源：** 重点习题2.4的有限序列卷积模型，用于检验卷积和定义。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题清单｜PDF 4｜印刷页 —｜题号 2.4
- OPPENHEIM-2E-LIU-01｜第2章习题2.4｜PDF 110｜印刷页 87｜题号 2.4

---

## scut811-p1-sample-005｜2.2｜error_discrimination

**知识点：** kp-2.2 连续时间LTI与卷积积分

**题干：** 图解卷积时，把 \(h(t-\tau)\) 看成变量 \(\tau\) 的函数。由 \(h(\tau)\) 得到它的正确操作顺序是什么？

- A. 先关于原点翻转成 \(h(-\tau)\)，再向右平移 \(t\) ✅
- B. 不翻转，直接把 \(h(\tau)\) 向右平移 \(t\) · `WRONG_SHIFT_DIRECTION`
- C. 先翻转成 \(h(-\tau)\)，再向左平移 \(t\) · `WRONG_SHIFT_DIRECTION`
- D. 先把 \(h(\tau)\) 向右平移 \(t\)，再对变量 \(t\) 翻转 · `CONFUSE_CT_DT`

**解析：** 正确：\(h(t-\tau)=h[-(\tau-t)]\)，因此相对于 \(\tau\) 是先翻转，再向右移动 \(t\)。错误项遗漏翻转、把平移方向写反，或混淆滑动变量。易错点：积分时 \(t\) 是参数，\(\tau\) 才是横轴变量。

**来源：** 重点习题2.16的卷积时移、反转和支撑辨析，改写为图解卷积操作题。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题清单｜PDF 4｜印刷页 —｜题号 2.16
- OPPENHEIM-2E-LIU-01｜第2章习题2.16｜PDF 111｜印刷页 88｜题号 2.16

---

## scut811-p1-sample-006｜2.3｜concept

**知识点：** kp-2.3 LTI系统性质

**题干：** 对连续时间LTI系统，已知 \(x(t)\to y(t)\)。下列哪组输入输出关系必然成立？

- A. \(x(t-t_0)\to y(t+t_0)\) · `WRONG_SHIFT_DIRECTION`
- B. \(\frac{dx(t)}{dt}\to y(t)\)
- C. \(\frac{dx(t)}{dt}\to\frac{dy(t)}{dt}\) ✅
- D. \(x(at)\to\frac{1}{|a|}y(at)\) · `MISS_SCALE_FACTOR`

**解析：** 正确：微分可与LTI卷积运算交换，所以输入的导数对应输出的导数。错误项把时移方向写反、漏掉输出微分，或把傅里叶变换的尺度因子误套到系统响应。易错点：LTI只保证平移和线性组合，通常不保证时间尺度变换可交换。

**来源：** 重点习题2.45的输入导数与输出导数关系，改写为性质判断。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题清单｜PDF 4｜印刷页 —｜题号 2.45
- OPPENHEIM-2E-LIU-01｜第2章习题2.45(a)-(b)｜PDF 117｜印刷页 94｜题号 2.45

---

## scut811-p1-sample-007｜2.3｜error_discrimination

**知识点：** kp-2.3 LTI系统性质

**题干：** 连续时间LTI系统的单位阶跃响应为 \(s(t)\)，单位冲激响应为 \(h(t)\)。两者的正确关系是哪一个？

- A. \(s(t)=\frac{dh(t)}{dt}\)
- B. \(h(t)=\frac{ds(t)}{dt}\) ✅
- C. \(h(t)=\int_{-\infty}^{t}s(\tau)d\tau\)
- D. \(h(t)=s(t)\)

**解析：** 正确：\(s(t)=u(t)*h(t)\)，对时间求导并用 \(du/dt=\delta\)，得到 \(ds/dt=h\)。错误项颠倒微分关系、重复积分或直接把两种响应等同。易错点：阶跃响应是冲激响应从负无穷开始的累积。

**来源：** 重点习题2.45的阶跃响应、冲激响应及微分关系，改写为快速辨析。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第2章重点课后题清单｜PDF 4｜印刷页 —｜题号 2.45
- OPPENHEIM-2E-LIU-01｜第2章习题2.45(b)-(d)｜PDF 117｜印刷页 94｜题号 2.45

---
