# 第1章人工审题（30题）

> 当前状态：reviewed=30。内容审核门槛：正确答案正确、题干无实质歧义、无明显错误知识、无严重重复或低价值题。来源和 machine error tag 的精细问题不阻塞 reviewed，但 verified 仍须最终核验。

## scut811-p1-q0021｜1.1｜concept

**知识点：** kp-1.1 连续离散信号与能量功率

**题干：** 关于能量信号与功率信号，下列说法正确的是哪一项？

- A. 非零有限能量信号的平均功率为0 ✅
- B. 所有功率信号的能量都有限 · `CONFUSE_ENERGY_POWER`
- C. 能量信号一定是周期信号 · `CONFUSE_ENERGY_POWER`
- D. 只要平均功率为0，信号就恒为0 · `CONFUSE_ENERGY_POWER`

**解析：** 正确：有限能量除以无限观察时长后平均功率为0。错项混淆了能量、功率与周期性。易错点：平均功率为0不代表信号处处为0。

**来源：** 基于重点习题1.3（连续与离散信号的能量、平均功率）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.3
- OPPENHEIM-2E-LIU-01｜习题1.3｜PDF 60｜印刷页 37｜题号 1.3

---

## scut811-p1-q0022｜1.1｜concept

**知识点：** kp-1.1 连续离散信号与能量功率

**题干：** 非零周期连续时间信号，若一周期能量有限且非零，则该信号通常属于哪一类？

- A. 既不是能量信号也不是功率信号 · `CONFUSE_ENERGY_POWER`
- B. 功率信号，能量为无穷 ✅
- C. 能量信号，平均功率为0 · `CONFUSE_ENERGY_POWER`
- D. 既是能量信号又是功率信号 · `CONFUSE_ENERGY_POWER`

**解析：** 正确：非零周期信号的有限周期能量会无限重复，总能量发散而平均功率有限。错项把单周期能量当成总能量。易错点：周期信号的功率应在一个周期内求平均。

**来源：** 基于重点习题1.3（连续与离散信号的能量、平均功率）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.3
- OPPENHEIM-2E-LIU-01｜习题1.3｜PDF 60｜印刷页 37｜题号 1.3

---

## scut811-p1-q0023｜1.1｜error_discrimination

**知识点：** kp-1.1 连续离散信号与能量功率

**题干：** 计算复信号能量时，哪一个积分式正确？

- A. \(E=\int_{-\infty}^{\infty}|x(t)|dt\) · `FORGOT_MAGNITUDE_SQUARED`
- B. \(E=\left|\int_{-\infty}^{\infty}x(t)dt\right|^2\) · `FORGOT_MAGNITUDE_SQUARED`
- C. \(E=\int_{-\infty}^{\infty}|x(t)|^2dt\) ✅
- D. \(E=\int_{-\infty}^{\infty}x(t)dt\) · `FORGOT_MAGNITUDE_SQUARED`

**解析：** 正确：信号能量由模平方积分定义。错项分别漏掉平方、只取模或先积分后平方。易错点：复信号必须使用 \(x(t)x^*(t)\)。

**来源：** 基于重点习题1.3（连续与离散信号的能量、平均功率）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.3
- OPPENHEIM-2E-LIU-01｜习题1.3｜PDF 60｜印刷页 37｜题号 1.3

---

## scut811-p1-q0024｜1.1｜error_discrimination

**知识点：** kp-1.1 连续离散信号与能量功率

**题干：** 离散信号 \(x[n]=(1/2)^nu[n]\) 的能量求和应从哪里开始？

- A. \(E=\sum_{n=-\infty}^{\infty}(1/2)^n\) · `FORGOT_MAGNITUDE_SQUARED`
- B. \(E=\sum_{n=0}^{\infty}(1/2)^n\) · `FORGOT_MAGNITUDE_SQUARED`
- C. \(E=\sum_{n=-\infty}^{0}(1/4)^n\) · `WRONG_SUPPORT_INTERVAL`
- D. \(E=\sum_{n=0}^{\infty}(1/4)^n\) ✅

**解析：** 正确：\(u[n]\) 限定 \(n\ge0\)，且能量使用模平方，所以底数变为 \(1/4\)。错项忽略支撑或平方。易错点：先确定非零区间，再取模平方。

**来源：** 基于重点习题1.3（连续与离散信号的能量、平均功率）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.3
- OPPENHEIM-2E-LIU-01｜习题1.3｜PDF 60｜印刷页 37｜题号 1.3

---

## scut811-p1-q0025｜1.2｜concept

**知识点：** kp-1.2 自变量变换周期奇偶

**题干：** 若 \(x(t)\) 是偶信号，则下列关系必成立的是哪一个？

- A. \(x(-t)=x(t)\) ✅
- B. \(x(-t)=-x(t)\) · `SIGN_ERROR`
- C. \(x(t+T)=x(t)\) · `WRONG_PERIOD`
- D. \(x^*(t)=x(t)\) · `IGNORED_CONJUGATE_SYMMETRY`

**解析：** 正确：偶信号关于纵轴对称，定义为 \(x(-t)=x(t)\)。错项分别描述奇性、周期性和实值性。易错点：偶性不要求信号为实数。

**来源：** 教材第1.2.3节给出偶信号定义与偶部表达式。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第1.2.3节 偶信号与奇信号，式(1.14)｜PDF 32｜印刷页 9

---

## scut811-p1-q0026｜1.2｜concept

**知识点：** kp-1.2 自变量变换周期奇偶

**题干：** 连续时间信号 \(\cos(6t+\phi)\) 的基本周期是多少？

- A. \(T_0=3/\pi\) · `WRONG_FREQUENCY_SCALE`
- B. \(T_0=\pi/3\) ✅
- C. \(T_0=6\pi\) · `WRONG_FREQUENCY_SCALE`
- D. \(T_0=1/6\) · `MISSING_2PI`

**解析：** 正确：角频率为6，周期为 \(2\pi/6=\pi/3\)。错项把角频率当普通频率或取倒数错误。易错点：相位 \(\phi\) 不改变周期。

**来源：** 教材由连续时间复指数周期条件推出正弦的基本周期。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第1.3.1节 周期复指数和正弦信号，式(1.24)～(1.25)｜PDF 34｜印刷页 11

---

## scut811-p1-q0027｜1.2｜concept

**知识点：** kp-1.2 自变量变换周期奇偶

**题干：** 离散时间正弦 \(\cos(\Omega_0n)\) 为周期信号的条件是什么？

- A. 存在实数 \(N\)，使 \(\Omega_0N=2\pi\) · `WRONG_PERIOD`
- B. \(\Omega_0/\pi\) 必须是无理数 · `WRONG_PERIOD`
- C. 存在正整数 \(N,m\)，使 \(\Omega_0N=2\pi m\) ✅
- D. 只要 \(\Omega_0\ne0\) 就周期 · `WRONG_PERIOD`

**解析：** 正确：离散序列要求整数位移后相位增加整数个 \(2\pi\)。错项忽略了周期必须为正整数。易错点：连续正弦总周期，离散正弦未必周期。

**来源：** 重点习题1.26直接训练离散信号周期性；同时由教材正文定义或性质核对。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.26
- OPPENHEIM-2E-LIU-01｜习题1.26｜PDF 63｜印刷页 40｜题号 1.26
- OPPENHEIM-2E-LIU-01｜第1.3.3节 离散时间复指数序列的周期性质，式(1.53)～(1.55)｜PDF 40｜印刷页 17

---

## scut811-p1-q0028｜1.2｜concept

**知识点：** kp-1.2 自变量变换周期奇偶

**题干：** 由任意信号 \(x(t)\) 构造其偶部，正确表达式是哪一个？

- A. \(x_e(t)=x(t)+x(-t)\) · `MISS_FACTOR_2`
- B. \(x_e(t)=\frac12[x(t)-x(-t)]\) · `SIGN_ERROR`
- C. \(x_e(t)=x(-t)\) · `MISSING_TIME_REVERSAL`
- D. \(x_e(t)=\frac12[x(t)+x(-t)]\) ✅

**解析：** 正确：原信号与反转信号相加后除以2得到偶部。错项漏掉二分之一、写成奇部或只做反转。易错点：偶部与奇部之和才还原原信号。

**来源：** 重点习题1.21直接训练波形反转与偶部构造；同时由教材正文定义或性质核对。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.21
- OPPENHEIM-2E-LIU-01｜习题1.21｜PDF 62｜印刷页 39｜题号 1.21
- OPPENHEIM-2E-LIU-01｜第1.2.3节 偶信号与奇信号，式(1.18)～(1.19)｜PDF 32｜印刷页 9

---

## scut811-p1-q0029｜1.2｜formula

**知识点：** kp-1.2 自变量变换周期奇偶

**题干：** 若 \(x(t)\) 的基本周期为 \(T_0\)，且 \(a\ne0\)，则 \(x(at)\) 的基本周期为多少？

- A. \(T_0/|a|\) ✅
- B. \(|a|T_0\) · `WRONG_FREQUENCY_SCALE`
- C. \(T_0/a\) · `MISSING_ABSOLUTE_VALUE`
- D. \(T_0+a\) · `WRONG_PERIOD`

**解析：** 正确：令时间伸缩后的自变量增加一个原周期，需要 \(|a|T=T_0\)。错项把伸缩方向写反或漏掉绝对值。易错点：负 \(a\) 还包含反转，但周期必须为正。

**来源：** 基于重点习题1.6（信号周期性判断）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.6
- OPPENHEIM-2E-LIU-01｜习题1.6｜PDF 60｜印刷页 37｜题号 1.6

---

## scut811-p1-q0030｜1.2｜error_discrimination

**知识点：** kp-1.2 自变量变换周期奇偶

**题干：** 已知 \(x(t)\) 在 \(t=2\) 有一处特征点。信号 \(x(3-t)\) 的对应特征点位于哪里？

- A. \(t=6\) · `WRONG_FREQUENCY_SCALE`
- B. \(t=1\) ✅
- C. \(t=-1\) · `WRONG_SHIFT_DIRECTION`
- D. \(t=5\) · `MISSING_TIME_REVERSAL`

**解析：** 正确：令 \(3-t=2\)，得 \(t=1\)。错项常来自只平移不反转或机械乘尺度。易错点：复合自变量应直接令其等于原特征点。

**来源：** 重点习题1.21直接训练波形时移与时间反转；同时由教材正文定义或性质核对。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.21
- OPPENHEIM-2E-LIU-01｜习题1.21｜PDF 62｜印刷页 39｜题号 1.21
- OPPENHEIM-2E-LIU-01｜第1.2.1节 自变量变换举例：时移与时间反转｜PDF 29｜印刷页 6

---

## scut811-p1-q0031｜1.2｜error_discrimination

**知识点：** kp-1.2 自变量变换周期奇偶

**题干：** 学生称 \(x[-n+4]\) 是“把 \(x[n]\) 向右移4点”。核心错误是什么？

- A. 离散时间信号不能做反转 · `CONFUSE_CT_DT`
- B. 应理解为向左移4点且不反转 · `WRONG_SHIFT_DIRECTION`
- C. 遗漏时间反转；应先反转再按结果定位平移 ✅
- D. 平移方向正确，只漏了幅度缩放 · `MISS_SCALE_FACTOR`

**解析：** 正确：\(-n+4=-(n-4)\)，包含反转与右移4点。错项忽略反转或误判离散操作。易错点：先把自变量整理成 \(a(n-n_0)\)。

**来源：** 基于重点习题1.21（波形时移、反转、尺度、偶部及冲激乘积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.21
- OPPENHEIM-2E-LIU-01｜习题1.21｜PDF 62｜印刷页 39｜题号 1.21

---

## scut811-p1-q0032｜1.3｜concept

**知识点：** kp-1.3 指数与正弦信号

**题干：** 连续时间复指数 \(e^{(\sigma+j\omega_0)t}\) 的包络由什么决定？

- A. \(e^{j\omega_0t}\) · `CONFUSE_ENVELOPE_PHASE`
- B. \(\cos\sigma t\) · `WRONG_FREQUENCY_SCALE`
- C. \(e^{\omega_0t}\) · `WRONG_FREQUENCY_SCALE`
- D. \(e^{\sigma t}\) ✅

**解析：** 正确：实部 \(\sigma\) 控制指数增长或衰减，虚部控制振荡。错项把相位项当包络或交换参数。易错点：\(\sigma<0\) 才是随时间衰减。

**来源：** 教材一般复指数定义明确指出实部控制包络、虚部控制振荡。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第1.3.1节 一般复指数信号，式(1.42)～(1.43)及图1.23｜PDF 37｜印刷页 14

---

## scut811-p1-q0033｜1.3｜concept

**知识点：** kp-1.3 指数与正弦信号

**题干：** 离散复指数 \(e^{j\Omega_0n}\) 与 \(e^{j(\Omega_0+2\pi)n}\) 的关系是什么？

- A. 两者对所有整数 \(n\) 完全相同 ✅
- B. 两者角频率不同，因此一定不同 · `CONFUSE_CT_DT`
- C. 仅在 \(n=0\) 相同 · `WRONG_PERIOD`
- D. 两者互为共轭 · `IGNORED_CONJUGATE_SYMMETRY`

**解析：** 正确：整数 \(n\) 使 \(e^{j2\pi n}=1\)，离散角频率按 \(2\pi\) 等价。错项套用了连续时间直觉。易错点：离散频率存在模 \(2\pi\) 的等价类。

**来源：** 重点习题1.9直接训练连续及离散复指数周期条件；同时由教材正文定义或性质核对。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.9
- OPPENHEIM-2E-LIU-01｜习题1.9｜PDF 60｜印刷页 37｜题号 1.9
- OPPENHEIM-2E-LIU-01｜第1.3.3节 离散频率相差2π的复指数完全相同，式(1.51)｜PDF 39｜印刷页 16

---

## scut811-p1-q0034｜1.3｜concept

**知识点：** kp-1.3 指数与正弦信号

**题干：** 实正弦 \(A\cos(\omega_0t+\phi)\) 的复指数分解中，两项系数的关系是什么？

- A. 只保留正频率项即可保持实信号 · `IGNORED_CONJUGATE_SYMMETRY`
- B. 互为共轭，模均为 \(|A|/2\) ✅
- C. 两项系数都等于 \(A\) · `MISS_FACTOR_2`
- D. 两项系数互为相反数 · `SIGN_ERROR`

**解析：** 正确：欧拉展开给出一对共轭的正、负频率系数，各带二分之一。错项漏因子2或破坏实信号的共轭配对。易错点：相位在两项中符号相反。

**来源：** 教材用欧拉关系把实正弦展开为共轭的正、负频率复指数项。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第1.3.1节 欧拉关系及正弦的复指数表示，式(1.26)～(1.29)｜PDF 35｜印刷页 12

---

## scut811-p1-q0035｜1.3｜error_discrimination

**知识点：** kp-1.3 指数与正弦信号

**题干：** 判断 \(x[n]=e^{j\pi n/\sqrt2}\) 是否周期。正确结论是什么？

- A. 周期为 \(2\pi\sqrt2\) · `WRONG_PERIOD`
- B. 所有离散复指数都周期 · `CONFUSE_CT_DT`
- C. 非周期，因为 \((\pi/\sqrt2)/(2\pi)\) 为无理数 ✅
- D. 周期为 \(2\sqrt2\) · `WRONG_PERIOD`

**解析：** 正确：离散复指数周期要求 \(\Omega_0/(2\pi)\) 为有理数。错项允许非整数周期或照搬连续时间结论。易错点：离散周期 \(N\) 必须是整数。

**来源：** 基于重点习题1.9（连续及离散复指数的周期条件）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.9
- OPPENHEIM-2E-LIU-01｜习题1.9｜PDF 60｜印刷页 37｜题号 1.9

---

## scut811-p1-q0036｜1.4｜concept

**知识点：** kp-1.4 单位冲激与单位阶跃

**题干：** 冲激抽样性质 \(x(t)\delta(t-t_0)\) 的结果是哪一个？

- A. \(x(t)\delta(t_0)\) · `CONFUSE_IMPULSE_STEP`
- B. \(x(t-t_0)\delta(t)\) · `WRONG_SHIFT_DIRECTION`
- C. \(x(0)\delta(t-t_0)\) · `WRONG_SHIFT_DIRECTION`
- D. \(x(t_0)\delta(t-t_0)\) ✅

**解析：** 正确：冲激只保留 \(t=t_0\) 处的信号值。错项在错误位置取样或移动了冲激。易错点：冲激的位置决定被抽取的自变量值。

**来源：** 基于重点习题1.13（冲激积分表示与能量）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.13
- OPPENHEIM-2E-LIU-01｜习题1.13｜PDF 61｜印刷页 38｜题号 1.13

---

## scut811-p1-q0037｜1.4｜concept

**知识点：** kp-1.4 单位冲激与单位阶跃

**题干：** 单位阶跃与单位冲激在连续时间中的基本关系是什么？

- A. \(\frac{d}{dt}u(t)=\delta(t)\) ✅
- B. \(\frac{d}{dt}\delta(t)=u(t)\) · `CONFUSE_IMPULSE_STEP`
- C. \(u(t)=t\delta(t)\) · `CONFUSE_IMPULSE_STEP`
- D. \(\int_{-\infty}^{t}u(\tau)d\tau=\delta(t)\) · `FORGOT_INTEGRATION`

**解析：** 正确：阶跃在原点的广义导数是冲激。错项颠倒微分积分关系或误用乘积。易错点：\(u\) 是 \(\delta\) 从负无穷的积分。

**来源：** 基于重点习题1.14（周期波形导数与冲激列）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.14
- OPPENHEIM-2E-LIU-01｜习题1.14｜PDF 61｜印刷页 38｜题号 1.14

---

## scut811-p1-q0038｜1.4｜concept

**知识点：** kp-1.4 单位冲激与单位阶跃

**题干：** 积分 \(\int_{-\infty}^{\infty}(t+1)\delta(t-2)dt\) 的值是多少？

- A. \(0\) · `CONFUSE_IMPULSE_STEP`
- B. \(3\) ✅
- C. \(1\) · `WRONG_SHIFT_DIRECTION`
- D. \(2\) · `WRONG_SAMPLING_VALUE`

**解析：** 正确：抽样性质把 \(t\) 取为2，得到 \(2+1=3\)。错项在0处取值、只取冲激位置或认为普通点积分为0。易错点：含冲激的积分不能按普通函数“单点面积为0”处理。

**来源：** 基于重点习题1.13（冲激积分表示与能量）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.13
- OPPENHEIM-2E-LIU-01｜习题1.13｜PDF 61｜印刷页 38｜题号 1.13

---

## scut811-p1-q0039｜1.4｜error_discrimination

**知识点：** kp-1.4 单位冲激与单位阶跃

**题干：** 学生把 \(\int_{-\infty}^{t}\delta(\tau-3)d\tau\) 写成 \(u(t+3)\)。错在哪里？

- A. 应为 \(\delta(t-3)\)，积分不改变冲激 · `FORGOT_INTEGRATION`
- B. 积分上限应替换为 \(\tau\) · `CONFUSE_IMPULSE_STEP`
- C. 阶跃平移符号写反，应为 \(u(t-3)\) ✅
- D. 忘记乘以3，应为 \(3u(t+3)\) · `MISS_SCALE_FACTOR`

**解析：** 正确：冲激位于3，累积到 \(t\ge3\) 才跳变，所以是 \(u(t-3)\)。错项混淆平移符号或忘记积分。易错点：先看跳变发生在横轴哪个位置。

**来源：** 基于重点习题1.13（冲激积分表示与能量）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.13
- OPPENHEIM-2E-LIU-01｜习题1.13｜PDF 61｜印刷页 38｜题号 1.13

---

## scut811-p1-q0040｜1.5-1.6｜concept

**知识点：** kp-1.5-1.6 系统与基本系统性质

**题干：** 系统 \(y(t)=3x(t)-2\) 是否线性？

- A. 线性，因为只含一次方的 \(x(t)\) · `LINEARITY_ERROR`
- B. 线性，因为满足时不变性 · `LINEARITY_ERROR`
- C. 是否线性取决于输入是否周期 · `LINEARITY_ERROR`
- D. 非线性，因为零输入产生非零输出 ✅

**解析：** 正确：常数偏置使齐次性失效，特别是零输入输出为-2。错项只看代数次数或混入无关性质。易错点：仿射系统通常不是线性系统。

**来源：** 教材第1.6.6节给出线性、齐次性及零输入必须产生零输出的直接推论。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第1.6.6节 线性：叠加性质与零输入响应，式(1.121)～(1.125)｜PDF 57｜印刷页 34

---

## scut811-p1-q0041｜1.5-1.6｜concept

**知识点：** kp-1.5-1.6 系统与基本系统性质

**题干：** 无记忆系统的输出在时刻 \(t_0\) 可以依赖什么？

- A. 只依赖输入在同一时刻 \(t_0\) 的值 ✅
- B. 可以依赖所有过去输入 · `CONFUSE_MEMORY_CAUSALITY`
- C. 只能依赖未来输入 · `CAUSALITY_ERROR`
- D. 必须与输入完全相等 · `LINEARITY_ERROR`

**解析：** 正确：无记忆要求当前输出只由当前输入决定。错项把无记忆与因果或恒等系统混淆。易错点：因果系统可有记忆，无记忆系统则必然因果。

**来源：** 教材第1.6.1节定义无记忆系统：当前输出仅依赖当前输入。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第1.6.1节 记忆系统与无记忆系统｜PDF 51｜印刷页 28

---

## scut811-p1-q0042｜1.5-1.6｜concept

**知识点：** kp-1.5-1.6 系统与基本系统性质

**题干：** 离散系统 \(y[n]=x[n]+x[n-1]\) 具有哪组性质？

- A. 非线性、时不变、因果且有记忆 · `LINEARITY_ERROR`
- B. 线性、时不变、因果且有记忆 ✅
- C. 线性、时变、因果且有记忆 · `TIME_INVARIANCE_ERROR`
- D. 线性、时不变、非因果且无记忆 · `CAUSALITY_ERROR`

**解析：** 正确：它是当前与过去样本的固定线性组合，平移输入会等量平移输出。错项误判线性、时不变性或记忆性。易错点：出现 \(x[n-1]\) 就说明有记忆，但仍可因果。

**来源：** 依据教材对记忆、因果、时不变和线性的定义逐项判定固定延时线性组合。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第1.6.1节 记忆系统与无记忆系统｜PDF 51｜印刷页 28
- OPPENHEIM-2E-LIU-01｜第1.6.3节 因果性｜PDF 53｜印刷页 30
- OPPENHEIM-2E-LIU-01｜第1.6.5节 时不变性｜PDF 55｜印刷页 32
- OPPENHEIM-2E-LIU-01｜第1.6.6节 线性｜PDF 57｜印刷页 34

---

## scut811-p1-q0043｜1.5-1.6｜concept

**知识点：** kp-1.5-1.6 系统与基本系统性质

**题干：** 因果连续时间系统在 \(t_0\) 的输出不能依赖哪一项？

- A. \(x(t_0-1)\) · `CAUSALITY_ERROR`
- B. \(\int_{-\infty}^{t_0}x(\tau)d\tau\) · `CAUSALITY_ERROR`
- C. \(x(t_0+1)\) ✅
- D. \(x(t_0)\) · `CAUSALITY_ERROR`

**解析：** 正确：\(x(t_0+1)\) 是未来输入，因果系统不能使用。错项均只使用当前或过去输入。易错点：积分形式要看积分上限，而不是看到积分就判为非因果。

**来源：** 教材第1.6.3节定义因果系统不能依赖未来输入。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第1.6.3节 因果性及未来输入反例，式(1.102)～(1.103)｜PDF 53｜印刷页 30

---

## scut811-p1-q0044｜1.5-1.6｜concept

**知识点：** kp-1.5-1.6 系统与基本系统性质

**题干：** 系统可逆的含义是哪一个？

- A. 系统一定是线性的 · `LINEARITY_ERROR`
- B. 系统一定是因果的 · `CAUSALITY_ERROR`
- C. 输出一定等于输入 · `CONFUSE_INVERTIBILITY_IDENTITY`
- D. 由输出可以唯一恢复输入 ✅

**解析：** 正确：可逆要求不同输入不会产生同一输出，并存在逆系统恢复输入。错项把可逆性与线性、因果或恒等关系混淆。易错点：可逆系统不必线性。

**来源：** 基于重点习题1.27（连续系统基本性质判定）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.27
- OPPENHEIM-2E-LIU-01｜习题1.27｜PDF 63｜印刷页 40｜题号 1.27

---

## scut811-p1-q0045｜1.5-1.6｜error_discrimination

**知识点：** kp-1.5-1.6 系统与基本系统性质

**题干：** 学生认为 \(y[n]=n x[n]\) 时不变，因为没有移位项。正确判断是什么？

- A. 系统时变；输入移位后系数仍为 \(n\)，而输出移位后的系数为 \(n-n_0\) ✅
- B. 系统时不变，学生理由正确 · `TIME_INVARIANCE_ERROR`
- C. 系统非线性，所以无法判断时不变性 · `LINEARITY_ERROR`
- D. 系统非因果，所以一定时变 · `CAUSALITY_ERROR`

**解析：** 正确：显式依赖绝对时间 \(n\) 会使移位检验不相等。错项用“无移位项”替代正式检验或混淆不同性质。易错点：线性与时不变性必须分别判断。

**来源：** 教材例1.15直接以 y[n]=nx[n] 说明显式时变增益构成时变系统。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜例1.15：y[n]=nx[n] 的时变性，式(1.119)｜PDF 56｜印刷页 33｜题号 例1.15

---

## scut811-p1-q0046｜1.5-1.6｜error_discrimination

**知识点：** kp-1.5-1.6 系统与基本系统性质

**题干：** 对系统 \(y(t)=|x(t)|\)，哪一个性质判断正确？

- A. 非线性、时不变、有记忆且非因果 · `CAUSALITY_ERROR`
- B. 非线性、时不变、无记忆且因果 ✅
- C. 线性、时不变、无记忆且因果 · `LINEARITY_ERROR`
- D. 非线性、时变、无记忆且因果 · `TIME_INVARIANCE_ERROR`

**解析：** 正确：绝对值破坏叠加性，但不显含时间，只用当前输入。错项把非线性误推成时变或非因果。易错点：非线性系统也可以时不变。

**来源：** 基于重点习题1.17（非线性自变量映射系统的因果性、线性；清单另建议时变判断）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题列表｜PDF 4｜印刷页 —｜题号 1.17
- OPPENHEIM-2E-LIU-01｜习题1.17｜PDF 61｜印刷页 38｜题号 1.17

---

## scut811-p1-q0047｜1.5-1.6｜error_discrimination

**知识点：** kp-1.5-1.6 系统与基本系统性质

**题干：** 系统 \(y[n]=x[-n]\) 的性质判断正确的是哪一项？

- A. 非线性、时变、因果且无记忆 · `LINEARITY_ERROR`
- B. 线性、时变、因果且有记忆 · `CAUSALITY_ERROR`
- C. 线性、时变、非因果且有记忆 ✅
- D. 线性、时不变、非因果且有记忆 · `TIME_INVARIANCE_ERROR`

**解析：** 正确：时间反转保持线性，但不与平移交换；正 \(n\) 的输出会取负时刻，而负 \(n\) 时可能取未来，因此整体非因果。错项误判了线性、时不变性或因果性。易错点：时间反转不是时不变操作。

**来源：** 教材以 y[n]=x[-n] 说明非因果性，并结合记忆、时不变和线性定义完成性质判定。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第1.6.3节 例1.12：y[n]=x[-n] 的非因果性，式(1.105)｜PDF 53｜印刷页 30｜题号 例1.12
- OPPENHEIM-2E-LIU-01｜第1.6.1节 记忆系统与无记忆系统｜PDF 51｜印刷页 28
- OPPENHEIM-2E-LIU-01｜第1.6.5节 时不变性｜PDF 55｜印刷页 32
- OPPENHEIM-2E-LIU-01｜第1.6.6节 线性｜PDF 57｜印刷页 34

---

## scut811-p1-sample-001｜1.1｜concept

**知识点：** kp-1.1 连续离散信号与能量功率

**题干：** 连续时间信号 \(x(t)=e^{-2t}u(t)\) 的能量 \(E\) 与平均功率 \(P\) 分别为哪一组？

- A. \(E=\frac14,\ P=0\) ✅
- B. \(E=\frac12,\ P=0\) · `FORGOT_MAGNITUDE_SQUARED`
- C. \(E=\infty,\ P=\frac14\) · `CONFUSE_ENERGY_POWER`
- D. \(E=0,\ P=\frac14\) · `CONFUSE_ENERGY_POWER`

**解析：** 正确：\(E=\int_0^\infty e^{-4t}dt=1/4\)，有限能量信号的平均功率为0。错误项的核心是忘记先取模平方，或把能量与功率混淆。易错点：指数衰减率在 \(|x(t)|^2\) 中加倍。

**来源：** 重点习题1.3的能量/平均功率判断模型，改写为短选择题。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题清单｜PDF 4｜印刷页 —｜题号 1.3
- OPPENHEIM-2E-LIU-01｜第1章习题1.3｜PDF 60｜印刷页 37｜题号 1.3

---

## scut811-p1-sample-002｜1.5-1.6｜error_discrimination

**知识点：** kp-1.5-1.6 系统与基本系统性质

**题干：** 系统 \(y(t)=x(\sin t)\) 的性质判断正确的是哪一项？

- A. 线性、时不变、非因果 · `TIME_INVARIANCE_ERROR`
- B. 线性、时变、非因果 ✅
- C. 非线性、时变、非因果 · `LINEARITY_ERROR`
- D. 线性、时变、因果 · `CAUSALITY_ERROR`

**解析：** 正确：取样自变量的映射不破坏叠加性，但平移输入不能只让输出平移，所以系统时变；例如 \(t=-\pi/2\) 时，\(\sin t=-1>t\)，输出使用了相对当前时刻的未来输入，因此非因果。错项分别误判时不变性、线性或因果性。易错点：系统线性看输入幅度的叠加，不看时间轴是否被非线性变换。

**来源：** 重点习题1.17及清单追加的时变判断，改写为三性质辨析。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题清单，1.17附“加一个时变判断”｜PDF 4｜印刷页 —｜题号 1.17
- OPPENHEIM-2E-LIU-01｜第1章习题1.17｜PDF 61｜印刷页 38｜题号 1.17

---

## scut811-p1-sample-003｜1.4｜formula

**知识点：** kp-1.4 单位冲激与单位阶跃

**题干：** 若 \(x(t)=\delta(t+2)-\delta(t-2)\)，则 \(y(t)=\int_{-\infty}^{t}x(\tau)d\tau\) 等于什么？

- A. \(u(t-2)-u(t+2)\) · `WRONG_SHIFT_DIRECTION`
- B. \(u(t+2)+u(t-2)\) · `SIGN_ERROR`
- C. \(u(t+2)-u(t-2)\) ✅
- D. \(\delta(t+2)-\delta(t-2)\) · `FORGOT_INTEGRATION`

**解析：** 正确：从负无穷积分把每个冲激变成同位置、同系数的阶跃，所以得到 \(u(t+2)-u(t-2)\)。错误项主要混淆平移正负号、冲激系数符号或忘记积分。易错点：\(\delta(t-t_0)\) 积分为 \(u(t-t_0)\)。

**来源：** 重点习题1.13的冲激积分关系，压缩为一步判断题。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第1章重点课后题清单｜PDF 4｜印刷页 —｜题号 1.13
- OPPENHEIM-2E-LIU-01｜第1章习题1.13｜PDF 61｜印刷页 38｜题号 1.13

---
