# 第4章人工审题（85题）

> 当前状态：reviewed=85。内容审核门槛：正确答案正确、题干无实质歧义、无明显错误知识、无严重重复或低价值题。来源和 machine error tag 的精细问题不阻塞 reviewed，但 verified 仍须最终核验。

## scut811-p1-q0150｜4.1｜concept

**知识点：** kp-4.1 非周期信号与CTFT

**题干：** CTFT存在时，频谱 \(X(j\omega)\) 描述的是什么？

- A. 系统冲激响应本身 · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- B. 信号在连续角频率上的复幅度分布 ✅
- C. 信号在离散谐波上的傅里叶级数系数 · `CONFUSE_CT_DT`
- D. 信号的瞬时功率 · `CONFUSE_ENERGY_POWER`

**解析：** 正确：CTFT把非周期信号分解为连续频率的复指数。错项混淆级数、功率和系统响应。易错点：非周期CTFT的频率变量连续。

**来源：** 基于重点习题4.14（由逆变换约束及Parseval恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.14
- OPPENHEIM-2E-LIU-01｜习题4.14｜PDF 237｜印刷页 214｜题号 4.14

---

## scut811-p1-q0151｜4.1｜concept

**知识点：** kp-4.1 非周期信号与CTFT

**题干：** 绝对可积条件 \(\int|x(t)|dt<\infty\) 对CTFT意味着什么？

- A. 它说明信号一定周期 · `CONFUSE_ENERGY_POWER`
- B. 它只适用于离散时间序列 · `CONFUSE_CT_DT`
- C. 它是CTFT存在的一个充分条件 ✅
- D. 它是CTFT存在的必要且充分条件 · `IGNORED_CONVERGENCE_CONDITION`

**解析：** 正确：绝对可积保证普通意义下的CTFT存在，但不是唯一情形。错项把充分条件说成充要条件或混淆信号类型。易错点：冲激、常数等还可用广义函数表示。

**来源：** 基于重点习题4.15（由频谱实部与时域支撑恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.15
- OPPENHEIM-2E-LIU-01｜习题4.15｜PDF 237｜印刷页 214｜题号 4.15

---

## scut811-p1-q0152｜4.1｜formula

**知识点：** kp-4.1 非周期信号与CTFT

**题干：** 连续时间傅里叶变换分析公式是哪一个？

- A. \(X(j\omega)=\int x(t)e^{j\omega t}dt\) · `SIGN_ERROR`
- B. \(X(j\omega)=\frac1{2\pi}\int x(t)e^{-j\omega t}dt\) · `MISSING_2PI`
- C. \(X(e^{j\omega})=\sum_nx[n]e^{-j\omega n}\) · `CONFUSE_CT_DT`
- D. \(X(j\omega)=\int_{-\infty}^{\infty}x(t)e^{-j\omega t}dt\) ✅

**解析：** 正确：CTFT分析式采用负指数核且无前置 \(1/2\pi\)。错项写反符号、错放归一化或混入DTFT。易错点：\(1/2\pi\) 在合成式。

**来源：** 基于重点习题4.14（由逆变换约束及Parseval恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.14
- OPPENHEIM-2E-LIU-01｜习题4.14｜PDF 237｜印刷页 214｜题号 4.14

---

## scut811-p1-q0153｜4.1｜formula

**知识点：** kp-4.1 非周期信号与CTFT

**题干：** CTFT合成公式是哪一个？

- A. \(x(t)=\frac1{2\pi}\int_{-\infty}^{\infty}X(j\omega)e^{j\omega t}d\omega\) ✅
- B. \(x(t)=\int X(j\omega)e^{-j\omega t}d\omega\) · `SIGN_ERROR`
- C. \(x(t)=\frac1{T_0}\sum_kX_ke^{jk\omega_0t}\) · `CONFUSE_CT_DT`
- D. \(x(t)=2\pi\int X(j\omega)e^{j\omega t}d\omega\) · `MISSING_2PI`

**解析：** 正确：合成式含 \(1/2\pi\) 和正指数核。错项混淆正负号、级数与归一化。易错点：分析无系数，合成带 \(1/2\pi\)。

**来源：** 基于重点习题4.15（由频谱实部与时域支撑恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.15
- OPPENHEIM-2E-LIU-01｜习题4.15｜PDF 237｜印刷页 214｜题号 4.15

---

## scut811-p1-q0154｜4.1｜formula

**知识点：** kp-4.1 非周期信号与CTFT

**题干：** 若 \(x(t)=e^{-at}u(t)\)，\(a>0\)，其CTFT的零频值 \(X(0)\) 是多少？

- A. \(a\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- B. \(1/a\) ✅
- C. \(-1/a\) · `SIGN_ERROR`
- D. \(2/a\) · `MISS_FACTOR_2`

**解析：** 正确：\(X(0)=\int_0^\infty e^{-at}dt=1/a\)。错项把参数取倒、写反符号或多计一侧。易错点：零频值等于信号的时域面积。

**来源：** 基于重点习题4.25（频谱取值、积分、Parseval与偶部）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.25
- OPPENHEIM-2E-LIU-01｜习题4.25｜PDF 239｜印刷页 216｜题号 4.25

---

## scut811-p1-q0155｜4.1｜transform_pair

**知识点：** kp-4.1 非周期信号与CTFT

**题干：** 下列哪一个是正确CTFT变换对？

- A. \(1\leftrightarrow1\) · `MISSING_2PI`
- B. \(u(t)\leftrightarrow1\) · `CONFUSE_IMPULSE_STEP`
- C. \(\delta(t)\leftrightarrow1\) ✅
- D. \(\delta(t)\leftrightarrow2\pi\delta(\omega)\) · `CONFUSE_IMPULSE_STEP`

**解析：** 正确：冲激的CTFT为所有频率上常数1。错项把常数信号、阶跃或频域冲激混入。易错点：\(1\leftrightarrow2\pi\delta(\omega)\)。

**来源：** 基于重点习题4.14（由逆变换约束及Parseval恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.14
- OPPENHEIM-2E-LIU-01｜习题4.14｜PDF 237｜印刷页 214｜题号 4.14

---

## scut811-p1-q0156｜4.1｜transform_pair

**知识点：** kp-4.1 非周期信号与CTFT

**题干：** 常数信号1的CTFT是哪一个？

- A. \(\delta(\omega)\) · `MISSING_2PI`
- B. \(1\) · `CONFUSE_IMPULSE_STEP`
- C. \(2\pi\) · `CONFUSE_IMPULSE_STEP`
- D. \(2\pi\delta(\omega)\) ✅

**解析：** 正确：常数只有直流分量，按本书约定为 \(2\pi\delta(\omega)\)。错项漏 \(2\pi\) 或漏频域冲激。易错点：与 \(\delta(t)\leftrightarrow1\) 成对记忆。

**来源：** 基于重点习题4.15（由频谱实部与时域支撑恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.15
- OPPENHEIM-2E-LIU-01｜习题4.15｜PDF 237｜印刷页 214｜题号 4.15

---

## scut811-p1-q0157｜4.1｜transform_pair

**知识点：** kp-4.1 非周期信号与CTFT

**题干：** 矩形脉冲 \(x(t)=1,|t|<T\) 的CTFT为哪一项？

- A. \(2\sin(\omega T)/\omega\) ✅
- B. \(\sin(\omega T)/\omega\) · `MISS_FACTOR_2`
- C. \(2\sin(\omega T)/T\) · `WRONG_FREQUENCY_SCALE`
- D. \(2\cos(\omega T)/\omega\) · `SIGN_ERROR`

**解析：** 正确：直接积分区间 \([-T,T]\) 得 \(2\sin(\omega T)/\omega\)。错项漏对称区间的2或混淆变量。易错点：在 \(\omega=0\) 处极限等于脉冲面积 \(2T\)。

**来源：** 基于重点习题4.25（频谱取值、积分、Parseval与偶部）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.25
- OPPENHEIM-2E-LIU-01｜习题4.25｜PDF 239｜印刷页 216｜题号 4.25

---

## scut811-p1-q0158｜4.1｜transform_pair

**知识点：** kp-4.1 非周期信号与CTFT

**题干：** 双边指数 \(e^{-a|t|},a>0\) 的CTFT是什么？

- A. \(2a/(a^2-\omega^2)\) · `SIGN_ERROR`
- B. \(2a/(a^2+\omega^2)\) ✅
- C. \(1/(a+j\omega)\) · `MISSING_TIME_REVERSAL`
- D. \(2j\omega/(a^2+\omega^2)\) · `SIGN_ERROR`

**解析：** 正确：左右两侧指数之和给出实偶频谱 \(2a/(a^2+\omega^2)\)。错项只保留右边信号或破坏偶对称。易错点：实时域偶信号的频谱应实偶。

**来源：** 基于重点习题4.14（由逆变换约束及Parseval恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.14
- OPPENHEIM-2E-LIU-01｜习题4.14｜PDF 237｜印刷页 214｜题号 4.14

---

## scut811-p1-q0159｜4.1｜transform_pair

**知识点：** kp-4.1 非周期信号与CTFT

**题干：** \(e^{at}u(-t)\)，\(a>0\)，对应的频谱是哪一个？

- A. \(1/(a+j\omega)\) · `SIGN_ERROR`
- B. \(-1/(a-j\omega)\) · `SIGN_ERROR`
- C. \(1/(a-j\omega)\) ✅
- D. \(2a/(a^2+\omega^2)\) · `MISSING_TIME_REVERSAL`

**解析：** 正确：从负无穷积分到0得到 \(1/(a-j\omega)\)。错项混作右边指数、无端加负号或误作双边指数。易错点：左边支撑对应分母中的 \(-j\omega\)。

**来源：** 基于重点习题4.15（由频谱实部与时域支撑恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.15
- OPPENHEIM-2E-LIU-01｜习题4.15｜PDF 237｜印刷页 214｜题号 4.15

---

## scut811-p1-q0160｜4.1｜error_discrimination

**知识点：** kp-4.1 非周期信号与CTFT

**题干：** 学生在CTFT分析式前加了 \(1/(2\pi)\)。核心错误是什么？

- A. 指数核应改成实指数 · `CONFUSE_CT_DT`
- B. 积分应改成求和 · `CONFUSE_CT_DT`
- C. 所有CTFT都应再乘时间t · `WRONG_DIFFERENTIATION_FACTOR`
- D. 把合成公式的归一化系数放到了分析公式 ✅

**解析：** 正确：本项目约定分析式无系数、合成式含 \(1/2\pi\)。错项改变了变换类别或无端使用性质。易错点：先固定变换约定再套性质。

**来源：** 基于重点习题4.14（由逆变换约束及Parseval恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.14
- OPPENHEIM-2E-LIU-01｜习题4.14｜PDF 237｜印刷页 214｜题号 4.14

---

## scut811-p1-q0161｜4.1｜error_discrimination

**知识点：** kp-4.1 非周期信号与CTFT

**题干：** 有人说“只有绝对可积信号才有傅里叶变换”。该说法哪里不严谨？

- A. 绝对可积只是充分条件，某些信号可在广义函数意义下有变换 ✅
- B. 绝对可积只适用于周期信号 · `CONFUSE_ENERGY_POWER`
- C. 傅里叶变换无需任何收敛解释 · `IGNORED_CONVERGENCE_CONDITION`
- D. 只有离散序列才有傅里叶变换 · `CONFUSE_CT_DT`

**解析：** 正确：常数、冲激和正弦等需广义函数解释。错项否定收敛条件或混淆CT/DT。易错点：区分普通函数积分与广义变换。

**来源：** 基于重点习题4.15（由频谱实部与时域支撑恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.15
- OPPENHEIM-2E-LIU-01｜习题4.15｜PDF 237｜印刷页 214｜题号 4.15

---

## scut811-p1-q0162｜4.1｜error_discrimination

**知识点：** kp-4.1 非周期信号与CTFT

**题干：** 由 \(\delta(t)\leftrightarrow1\)，学生推出 \(1\leftrightarrow\delta(\omega)\)。漏了什么？

- A. 复共轭 · `IGNORED_CONJUGATE_SYMMETRY`
- B. 频域冲激前的 \(2\pi\) ✅
- C. 时间反转 · `MISSING_TIME_REVERSAL`
- D. 绝对值 · `MISSING_ABSOLUTE_VALUE`

**解析：** 正确：按当前CTFT约定，常数1对应 \(2\pi\delta(\omega)\)。错项与本变换对无关。易错点：时域冲激与频域冲激的系数不对称。

**来源：** 基于重点习题4.25（频谱取值、积分、Parseval与偶部）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.25
- OPPENHEIM-2E-LIU-01｜习题4.25｜PDF 239｜印刷页 216｜题号 4.25

---

## scut811-p1-q0163｜4.1｜error_discrimination

**知识点：** kp-4.1 非周期信号与CTFT

**题干：** 矩形脉冲宽度为 \(2T\)，学生认为频谱在 \(\omega=0\) 的值是1。最直接的检查是什么？

- A. 频谱零频值等于信号能量 · `CONFUSE_ENERGY_POWER`
- B. 只需检查频谱是否为奇函数 · `IGNORED_CONJUGATE_SYMMETRY`
- C. 零频值应等于时域面积 \(2T\) ✅
- D. 零频值总是 \(2\pi\) · `MISSING_2PI`

**解析：** 正确：\(X(0)=\int x(t)dt\)，等于脉冲面积。错项混淆归一化、能量和对称性。易错点：面积检查能快速发现尺度系数错误。

**来源：** 基于重点习题4.14（由逆变换约束及Parseval恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.14
- OPPENHEIM-2E-LIU-01｜习题4.14｜PDF 237｜印刷页 214｜题号 4.14

---

## scut811-p1-q0164｜4.2｜concept

**知识点：** kp-4.2 周期信号的傅里叶变换

**题干：** 周期连续时间信号的CTFT在频域通常表现为什么？

- A. 连续平滑频谱 · `CONFUSE_CT_DT`
- B. 只在零频有一个冲激 · `WRONG_HARMONIC_INDEX`
- C. 以 \(2\pi\) 为周期的普通函数 · `WRONG_PERIOD`
- D. 位于各谐波频率处的冲激线谱 ✅

**解析：** 正确：周期信号由离散谐波组成，CTFT是加权冲激列。错项混淆非周期CTFT和DTFT周期性。易错点：频率连续，但非零谱只在离散谐波点。

**来源：** 基于重点习题4.37（卷积周期化与FS系数、CTFT采样关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.37
- OPPENHEIM-2E-LIU-01｜习题4.37｜PDF 243｜印刷页 220｜题号 4.37

---

## scut811-p1-q0165｜4.2｜formula

**知识点：** kp-4.2 周期信号的傅里叶变换

**题干：** 若周期信号CTFS系数为 \(a_k\)，其CTFT是什么？

- A. \(2\pi\sum_{k=-\infty}^{\infty}a_k\delta(\omega-k\omega_0)\) ✅
- B. \(\sum_ka_k\delta(\omega-k\omega_0)\) · `MISSING_2PI`
- C. \(2\pi\sum_ka_k\delta(\omega-\omega_0)\) · `WRONG_HARMONIC_INDEX`
- D. \(\sum_ka_ke^{-jk\omega}\) · `CONFUSE_CT_DT`

**解析：** 正确：每个复指数谐波产生位于 \(k\omega_0\) 的 \(2\pi a_k\) 冲激。错项漏系数、漏k或混入DTFS。易错点：冲激位置必须随k变化。

**来源：** 基于重点习题4.37（卷积周期化与FS系数、CTFT采样关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.37
- OPPENHEIM-2E-LIU-01｜习题4.37｜PDF 243｜印刷页 220｜题号 4.37

---

## scut811-p1-q0166｜4.2｜formula

**知识点：** kp-4.2 周期信号的傅里叶变换

**题干：** \(x(t)=\cos(\omega_0t)\) 的CTFT是哪一项？

- A. \(j\pi[\delta(\omega-\omega_0)-\delta(\omega+\omega_0)]\) · `SIGN_ERROR`
- B. \(\pi[\delta(\omega-\omega_0)+\delta(\omega+\omega_0)]\) ✅
- C. \(2\pi[\delta(\omega-\omega_0)+\delta(\omega+\omega_0)]\) · `MISS_FACTOR_2`
- D. \(\pi\delta(\omega-\omega_0)\) · `IGNORED_CONJUGATE_SYMMETRY`

**解析：** 正确：余弦含两个系数均为1/2的复指数，乘 \(2\pi\) 后各为 \(\pi\)。错项漏负频率或混作正弦。易错点：实余弦必须有共轭对称双边谱线。

**来源：** 基于重点习题4.37（卷积周期化与FS系数、CTFT采样关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.37
- OPPENHEIM-2E-LIU-01｜习题4.37｜PDF 243｜印刷页 220｜题号 4.37

---

## scut811-p1-q0167｜4.2｜transform_pair

**知识点：** kp-4.2 周期信号的傅里叶变换

**题干：** \(e^{j\omega_0t}\) 的CTFT是哪一个？

- A. \(2\pi\delta(\omega+\omega_0)\) · `SIGN_ERROR`
- B. \(2\pi\delta(\omega_0-t)\) · `CONFUSE_CT_DT`
- C. \(2\pi\delta(\omega-\omega_0)\) ✅
- D. \(\delta(\omega-\omega_0)\) · `MISSING_2PI`

**解析：** 正确：单个正频率复指数对应 \(\omega_0\) 处权重 \(2\pi\) 的冲激。错项漏系数、写反位置或混淆变量。易错点：指数符号决定冲激所在的正负频率。

**来源：** 基于重点习题4.37（卷积周期化与FS系数、CTFT采样关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.37
- OPPENHEIM-2E-LIU-01｜习题4.37｜PDF 243｜印刷页 220｜题号 4.37

---

## scut811-p1-q0168｜4.2｜transform_pair

**知识点：** kp-4.2 周期信号的傅里叶变换

**题干：** \(\sin(\omega_0t)\) 的CTFT是哪一个？

- A. \(\pi[\delta(\omega-\omega_0)+\delta(\omega+\omega_0)]\) · `SIGN_ERROR`
- B. \(j2\pi[\delta(\omega+\omega_0)-\delta(\omega-\omega_0)]\) · `MISS_FACTOR_2`
- C. \(j\pi\delta(\omega-\omega_0)\) · `IGNORED_CONJUGATE_SYMMETRY`
- D. \(j\pi[\delta(\omega+\omega_0)-\delta(\omega-\omega_0)]\) ✅

**解析：** 正确：正弦的两条谱线为纯虚且符号相反。错项混作余弦、倍数错或漏一侧。易错点：实时域奇信号对应纯虚奇频谱。

**来源：** 基于重点习题4.37（卷积周期化与FS系数、CTFT采样关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.37
- OPPENHEIM-2E-LIU-01｜习题4.37｜PDF 243｜印刷页 220｜题号 4.37

---

## scut811-p1-q0169｜4.2｜transform_pair

**知识点：** kp-4.2 周期信号的傅里叶变换

**题干：** 周期冲激列 \(\sum_n\delta(t-nT_0)\) 的CTFT是哪一个？

- A. \(\omega_0\sum_k\delta(\omega-k\omega_0),\;\omega_0=2\pi/T_0\) ✅
- B. \(T_0\sum_k\delta(\omega-kT_0)\) · `WRONG_FREQUENCY_SCALE`
- C. \(2\pi\sum_k\delta(\omega-k\omega_0)\) · `WRONG_COEFFICIENT_NORMALIZATION`
- D. \(\sum_k\delta(\omega-k/T_0)\) · `MISSING_2PI`

**解析：** 正确：冲激列的CTFS系数为 \(1/T_0\)，乘 \(2\pi\) 得谱线权重 \(\omega_0\)。错项混淆周期与角频率或归一化。易错点：时域间隔 \(T_0\) 对应频域间隔 \(2\pi/T_0\)。

**来源：** 基于重点习题4.37（卷积周期化与FS系数、CTFT采样关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.37
- OPPENHEIM-2E-LIU-01｜习题4.37｜PDF 243｜印刷页 220｜题号 4.37

---

## scut811-p1-q0170｜4.2｜error_discrimination

**知识点：** kp-4.2 周期信号的傅里叶变换

**题干：** 学生把周期信号的CTFT画成连续曲线。核心错误是什么？

- A. 频谱应改成时间冲激列 · `CONFUSE_CT_DT`
- B. 周期信号的频谱应为谐波位置上的冲激线谱 ✅
- C. 周期信号只能有直流 · `WRONG_HARMONIC_INDEX`
- D. CTFT必须以 \(2\pi\) 为周期 · `WRONG_PERIOD`

**解析：** 正确：CTFS的离散谐波在CTFT中表现为频域冲激。错项混淆DTFT周期性和变量。易错点：谱线的包络可连续，但频谱本身是冲激。

**来源：** 基于重点习题4.37（卷积周期化与FS系数、CTFT采样关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.37
- OPPENHEIM-2E-LIU-01｜习题4.37｜PDF 243｜印刷页 220｜题号 4.37

---

## scut811-p1-q0171｜4.2｜error_discrimination

**知识点：** kp-4.2 周期信号的傅里叶变换

**题干：** \(e^{j3\omega_0t}\) 的谱线被放在 \(\omega=\omega_0\)。错在哪里？

- A. 应在 \(\omega=3\) · `WRONG_FREQUENCY_SCALE`
- B. 应覆盖全部频率 · `WRONG_HARMONIC_INDEX`
- C. 忽略谐波下标3，谱线应在 \(3\omega_0\) ✅
- D. 应在 \(-3\omega_0\) · `SIGN_ERROR`

**解析：** 正确：第k次谐波角频率是 \(k\omega_0\)。错项写反符号或漏单位。易错点：不要把基频和第k次谐波混为一谈。

**来源：** 基于重点习题4.37（卷积周期化与FS系数、CTFT采样关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.37
- OPPENHEIM-2E-LIU-01｜习题4.37｜PDF 243｜印刷页 220｜题号 4.37

---

## scut811-p1-q0172｜4.2｜error_discrimination

**知识点：** kp-4.2 周期信号的傅里叶变换

**题干：** 学生写 \(\cos\omega_0t\leftrightarrow2\pi\delta(\omega-\omega_0)\)。主要漏了什么？

- A. 时间尺度绝对值 · `MISSING_ABSOLUTE_VALUE`
- B. 卷积积分 · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- C. 频谱的 \(2\pi\) 周期延拓 · `WRONG_PERIOD`
- D. 负频率谱线及两条谱线各自的1/2系数 ✅

**解析：** 正确：余弦由正负两个复指数各占1/2组成。错项与余弦谱线无关。易错点：实信号频谱必须满足共轭对称。

**来源：** 基于重点习题4.37（卷积周期化与FS系数、CTFT采样关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.37
- OPPENHEIM-2E-LIU-01｜习题4.37｜PDF 243｜印刷页 220｜题号 4.37

---

## scut811-p1-q0173｜4.2｜error_discrimination

**知识点：** kp-4.2 周期信号的傅里叶变换

**题干：** 由 \(a_k\) 写周期信号CTFT时，学生用 \(\delta(\omega-kf_0)\)。问题是什么？

- A. CTFT变量是角频率时应使用 \(k\omega_0\) ✅
- B. 冲激前必须除以k · `WRONG_HARMONIC_INDEX`
- C. 应把k改成时间t · `CONFUSE_CT_DT`
- D. 所有谱线都应移到零频 · `WRONG_DC_COEFFICIENT`

**解析：** 正确：若横轴为 \(\omega\)，谱线间隔为 \(\omega_0=2\pi f_0\)。错项混淆下标和变量。易错点：先看频率轴单位再选 \(f_0\) 或 \(\omega_0\)。

**来源：** 基于重点习题4.37（卷积周期化与FS系数、CTFT采样关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.37
- OPPENHEIM-2E-LIU-01｜习题4.37｜PDF 243｜印刷页 220｜题号 4.37

---

## scut811-p1-q0174｜4.3｜concept

**知识点：** kp-4.3 CTFT性质

**题干：** 实信号 \(x(t)\) 的CTFT必满足哪种对称性？

- A. \(X(j\omega)\) 必为实数 · `IGNORED_CONJUGATE_SYMMETRY`
- B. \(X(-j\omega)=X^*(j\omega)\) ✅
- C. \(X(-j\omega)=X(j\omega)\) 对所有实信号都成立 · `IGNORED_CONJUGATE_SYMMETRY`
- D. \(X(-j\omega)=-X(j\omega)\) 对所有实信号都成立 · `IGNORED_CONJUGATE_SYMMETRY`

**解析：** 正确：实时域信号产生共轭对称频谱。错项把一般共轭对称缩成偶、奇或纯实。易错点：实偶才对应实偶频谱。

**来源：** 基于重点习题4.7（从频谱判定实虚、奇偶；不是教材第4.7节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.7
- OPPENHEIM-2E-LIU-01｜习题4.7｜PDF 236｜印刷页 213｜题号 4.7

---

## scut811-p1-q0175｜4.3｜concept

**知识点：** kp-4.3 CTFT性质

**题干：** Parseval关系在CTFT中表达的核心是什么？

- A. 功率信号一定有有限能量 · `CONFUSE_ENERGY_POWER`
- B. 频谱幅度必须处处为1 · `FORGOT_MAGNITUDE_SQUARED`
- C. 时域能量等于频域能量乘适当归一化因子 ✅
- D. 时域面积等于频域面积 · `CONFUSE_ENERGY_POWER`

**解析：** 正确：\(\int|x|^2dt=(1/2\pi)\int|X|^2d\omega\)。错项混淆面积、功率和幅值。易错点：两侧都有模平方，频域有 \(1/2\pi\)。

**来源：** 基于重点习题4.8（时域积分、微分与矩形脉冲变换对）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.8
- OPPENHEIM-2E-LIU-01｜习题4.8｜PDF 236｜印刷页 213｜题号 4.8

---

## scut811-p1-q0176｜4.3｜formula

**知识点：** kp-4.3 CTFT性质

**题干：** 若 \(x(t)\leftrightarrow X(j\omega)\)，则 \(x(t-t_0)\) 对应什么？

- A. \(e^{j\omega t_0}X(j\omega)\) · `WRONG_SHIFT_DIRECTION`
- B. \(X(j(\omega-t_0))\) · `WRONG_SHIFT_DIRECTION`
- C. \(t_0X(j\omega)\) · `MISS_SCALE_FACTOR`
- D. \(e^{-j\omega t_0}X(j\omega)\) ✅

**解析：** 正确：时延产生负指数线性相位。错项写反符号或把时移误作频移。易错点：右移 \(t_0\) 对应 \(e^{-j\omega t_0}\)。

**来源：** 基于重点习题4.7（从频谱判定实虚、奇偶；不是教材第4.7节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.7
- OPPENHEIM-2E-LIU-01｜习题4.7｜PDF 236｜印刷页 213｜题号 4.7

---

## scut811-p1-q0177｜4.3｜formula

**知识点：** kp-4.3 CTFT性质

**题干：** 若 \(x(t)\leftrightarrow X(j\omega)\)，则 \(e^{j\omega_0t}x(t)\) 对应什么？

- A. \(X(j(\omega-\omega_0))\) ✅
- B. \(X(j(\omega+\omega_0))\) · `WRONG_SHIFT_DIRECTION`
- C. \(e^{j\omega_0}X(j\omega)\) · `WRONG_SHIFT_DIRECTION`
- D. \(X(j\omega)e^{-j\omega t_0}\) · `CONFUSE_CT_DT`

**解析：** 正确：乘正频率复指数使频谱右移 \(\omega_0\)。错项写反频移或混入时移。易错点：把新频谱峰的位置代入检查最稳妥。

**来源：** 基于重点习题4.8（时域积分、微分与矩形脉冲变换对）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.8
- OPPENHEIM-2E-LIU-01｜习题4.8｜PDF 236｜印刷页 213｜题号 4.8

---

## scut811-p1-q0178｜4.3｜formula

**知识点：** kp-4.3 CTFT性质

**题干：** 时间尺度性质 \(x(at)\) 的CTFT是哪一个？

- A. \(|a|X(j\omega/a)\) · `MISS_SCALE_FACTOR`
- B. \(\frac1{|a|}X(j\omega/a)\) ✅
- C. \(X(ja\omega)\) · `WRONG_FREQUENCY_SCALE`
- D. \(\frac1aX(j\omega/a)\) · `MISSING_ABSOLUTE_VALUE`

**解析：** 正确：变量代换给出 \(1/|a|\)，频率轴反向尺度为 \(\omega/a\)。错项漏绝对值、尺度方向或系数取反。易错点：a为负时幅度系数仍为正。

**来源：** 基于重点习题4.9（常见变换对、实虚部与奇偶分解）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.9
- OPPENHEIM-2E-LIU-01｜习题4.9｜PDF 236｜印刷页 213｜题号 4.9

---

## scut811-p1-q0179｜4.3｜formula

**知识点：** kp-4.3 CTFT性质

**题干：** 时域微分 \(dx(t)/dt\) 的CTFT是什么？

- A. \(X(j\omega)/(j\omega)\) · `WRONG_DIFFERENTIATION_FACTOR`
- B. \(jX(j\omega)\) · `WRONG_FREQUENCY_SCALE`
- C. \(j\omega X(j\omega)\) ✅
- D. \(-j\omega X(j\omega)\) · `SIGN_ERROR`

**解析：** 正确：分部积分后得到乘子 \(j\omega\)。错项写反符号、混成积分或漏频率。易错点：微分次数对应 \((j\omega)^n\)。

**来源：** 基于重点习题4.10（sinc组合、频域运算与Parseval）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.10
- OPPENHEIM-2E-LIU-01｜习题4.10｜PDF 236｜印刷页 213｜题号 4.10

---

## scut811-p1-q0180｜4.3｜formula

**知识点：** kp-4.3 CTFT性质

**题干：** 时域乘以t的CTFT是什么？

- A. \(-j\frac{d}{d\omega}X(j\omega)\) · `SIGN_ERROR`
- B. \(j\omega X(j\omega)\) · `WRONG_DIFFERENTIATION_FACTOR`
- C. \(tX(j\omega)\) · `CONFUSE_CT_DT`
- D. \(j\frac{d}{d\omega}X(j\omega)\) ✅

**解析：** 正确：对分析式关于 \(\omega\) 求导可得 \(tx(t)\leftrightarrow jX^{\prime}(j\omega)\)。错项写反符号或混淆时域微分。易错点：时域乘t对应频域求导。

**来源：** 基于重点习题4.12（频域微分、对偶与标准指数变换对）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.12
- OPPENHEIM-2E-LIU-01｜习题4.12｜PDF 237｜印刷页 214｜题号 4.12

---

## scut811-p1-q0181｜4.3｜formula

**知识点：** kp-4.3 CTFT性质

**题干：** CTFT Parseval公式是哪一个？

- A. \(\int|x(t)|^2dt=\frac1{2\pi}\int|X(j\omega)|^2d\omega\) ✅
- B. \(\int x(t)dt=\int X(j\omega)d\omega\) · `FORGOT_MAGNITUDE_SQUARED`
- C. \(\int|x|^2dt=2\pi\int|X|^2d\omega\) · `WRONG_PARSEVAL_FACTOR`
- D. \(\int|x|dt=\frac1{2\pi}\int|X|d\omega\) · `FORGOT_MAGNITUDE_SQUARED`

**解析：** 正确：能量由模平方积分给出，按当前约定频域侧乘 \(1/2\pi\)。错项漏平方或归一化取反。易错点：Parseval不是普通面积关系。

**来源：** 基于重点习题4.14（由逆变换约束及Parseval恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.14
- OPPENHEIM-2E-LIU-01｜习题4.14｜PDF 237｜印刷页 214｜题号 4.14

---

## scut811-p1-q0182｜4.3｜formula

**知识点：** kp-4.3 CTFT性质

**题干：** 若 \(x(t)\leftrightarrow X(j\omega)\)，则 \(x^*(-t)\) 的CTFT是什么？

- A. \(-X^*(j\omega)\) · `SIGN_ERROR`
- B. \(X^*(j\omega)\) ✅
- C. \(X^*(-j\omega)\) · `MISSING_TIME_REVERSAL`
- D. \(X(-j\omega)\) · `IGNORED_CONJUGATE_SYMMETRY`

**解析：** 正确：时间反转先给 \(X(-j\omega)\)，再共轭得到 \(X^*(j\omega)\)。错项只做其中一个操作或多负号。易错点：逐步应用共轭和反转性质。

**来源：** 基于重点习题4.15（由频谱实部与时域支撑恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.15
- OPPENHEIM-2E-LIU-01｜习题4.15｜PDF 237｜印刷页 214｜题号 4.15

---

## scut811-p1-q0183｜4.3｜transform_pair

**知识点：** kp-4.3 CTFT性质

**题干：** 已知 \(x(t)\leftrightarrow X(j\omega)\)，哪一对正确表示延时？

- A. \(x(t-2)\leftrightarrow X(j(\omega-2))\) · `WRONG_SHIFT_DIRECTION`
- B. \(x(2t)\leftrightarrow e^{-j2\omega}X(j\omega)\) · `WRONG_FREQUENCY_SCALE`
- C. \(x(t-2)\leftrightarrow e^{-j2\omega}X(j\omega)\) ✅
- D. \(x(t-2)\leftrightarrow e^{j2\omega}X(j\omega)\) · `WRONG_SHIFT_DIRECTION`

**解析：** 正确：右移2产生 \(e^{-j2\omega}\)。错项写反相位或把时移当频移/尺度。易错点：时移不改变幅度谱。

**来源：** 基于重点习题4.7（从频谱判定实虚、奇偶；不是教材第4.7节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.7
- OPPENHEIM-2E-LIU-01｜习题4.7｜PDF 236｜印刷页 213｜题号 4.7

---

## scut811-p1-q0184｜4.3｜transform_pair

**知识点：** kp-4.3 CTFT性质

**题干：** 已知 \(x(t)\leftrightarrow X(j\omega)\)，哪一对正确表示压缩？

- A. \(x(2t)\leftrightarrow2X(j2\omega)\) · `WRONG_FREQUENCY_SCALE`
- B. \(x(2t)\leftrightarrow X(j\omega/2)\) · `MISS_SCALE_FACTOR`
- C. \(x(2t)\leftrightarrow-\frac12X(j\omega/2)\) · `MISSING_ABSOLUTE_VALUE`
- D. \(x(2t)\leftrightarrow\frac12X(j\omega/2)\) ✅

**解析：** 正确：时间压缩2倍使频谱展宽2倍并乘1/2。错项尺度同向、漏系数或误加负号。易错点：用面积或 \(1/|a|\) 检查。

**来源：** 基于重点习题4.8（时域积分、微分与矩形脉冲变换对）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.8
- OPPENHEIM-2E-LIU-01｜习题4.8｜PDF 236｜印刷页 213｜题号 4.8

---

## scut811-p1-q0185｜4.3｜transform_pair

**知识点：** kp-4.3 CTFT性质

**题干：** 若 \(x(t)\leftrightarrow X(j\omega)\)，下列哪一对正确？

- A. \(x(-t)\leftrightarrow X(-j\omega)\) ✅
- B. \(x(-t)\leftrightarrow-X(j\omega)\) · `SIGN_ERROR`
- C. \(x(-t)\leftrightarrow X^*(j\omega)\) · `IGNORED_CONJUGATE_SYMMETRY`
- D. \(x(-t)\leftrightarrow X(j/\omega)\) · `WRONG_FREQUENCY_SCALE`

**解析：** 正确：时间反转对应频率反转。错项把函数负号、共轭或倒数尺度混入。易错点：只有实时域信号时 \(X(-j\omega)=X^*(j\omega)\)。

**来源：** 基于重点习题4.9（常见变换对、实虚部与奇偶分解）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.9
- OPPENHEIM-2E-LIU-01｜习题4.9｜PDF 236｜印刷页 213｜题号 4.9

---

## scut811-p1-q0186｜4.3｜transform_pair

**知识点：** kp-4.3 CTFT性质

**题干：** 若 \(x(t)\leftrightarrow X(j\omega)\)，哪一对体现对偶性？

- A. \(X(jt)\leftrightarrow x(-\omega)/(2\pi)\) · `WRONG_DUALITY_FACTOR`
- B. \(X(jt)\leftrightarrow2\pi x(-\omega)\) ✅
- C. \(X(jt)\leftrightarrow x(\omega)\) · `WRONG_DUALITY_FACTOR`
- D. \(X(jt)\leftrightarrow2\pi x(\omega)\) · `MISSING_TIME_REVERSAL`

**解析：** 正确：当前CTFT约定下对偶包含 \(2\pi\) 和自变量反转。错项漏因子或反转。易错点：对偶性最容易同时漏两处。

**来源：** 基于重点习题4.10（sinc组合、频域运算与Parseval）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.10
- OPPENHEIM-2E-LIU-01｜习题4.10｜PDF 236｜印刷页 213｜题号 4.10

---

## scut811-p1-q0187｜4.3｜error_discrimination

**知识点：** kp-4.3 CTFT性质

**题干：** 学生写 \(x(t-t_0)\leftrightarrow e^{j\omega t_0}X(j\omega)\)。错误是什么？

- A. 应再乘 \(2\pi\) · `MISSING_2PI`
- B. 应把X改成模平方 · `FORGOT_MAGNITUDE_SQUARED`
- C. 时移相位符号写反，应为负号 ✅
- D. 应把 \(t_0\) 换成 \(1/t_0\) · `WRONG_FREQUENCY_SCALE`

**解析：** 正确：右移产生 \(e^{-j\omega t_0}\)。错项引入无关尺度、常数或能量。易错点：延时对应负线性相位。

**来源：** 基于重点习题4.7（从频谱判定实虚、奇偶；不是教材第4.7节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.7
- OPPENHEIM-2E-LIU-01｜习题4.7｜PDF 236｜印刷页 213｜题号 4.7

---

## scut811-p1-q0188｜4.3｜error_discrimination

**知识点：** kp-4.3 CTFT性质

**题干：** 学生写 \(x(-2t)\leftrightarrow-\frac12X(-j\omega/2)\)。主要错误是什么？

- A. 频率自变量不应反转 · `MISSING_TIME_REVERSAL`
- B. 系数应为2 · `MISS_SCALE_FACTOR`
- C. 应增加 \(2\pi\) · `MISSING_2PI`
- D. 幅度系数应为 \(1/|-2|=1/2\)，不能带负号 ✅

**解析：** 正确：尺度公式中的系数取绝对值；负号只反转频率轴。错项漏反转、取倒数错误或加入无关常数。易错点：把幅度系数与频率反转分开处理。

**来源：** 基于重点习题4.8（时域积分、微分与矩形脉冲变换对）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.8
- OPPENHEIM-2E-LIU-01｜习题4.8｜PDF 236｜印刷页 213｜题号 4.8

---

## scut811-p1-q0189｜4.3｜error_discrimination

**知识点：** kp-4.3 CTFT性质

**题干：** 学生由 \(x(t)\leftrightarrow X(j\omega)\) 推出 \(tx(t)\leftrightarrow j\omega X(j\omega)\)。混淆了什么？

- A. 把时域乘t误当成时域微分 ✅
- B. 漏了时间反转 · `MISSING_TIME_REVERSAL`
- C. 漏了模平方 · `FORGOT_MAGNITUDE_SQUARED`
- D. 把CTFT误当DTFT · `CONFUSE_CT_DT`

**解析：** 正确：乘t应对应 \(j\,dX/d\omega\)，而 \(j\omega X\) 对应 \(dx/dt\)。错项与此性质无关。易错点：乘变量对应另一域求导。

**来源：** 基于重点习题4.9（常见变换对、实虚部与奇偶分解）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.9
- OPPENHEIM-2E-LIU-01｜习题4.9｜PDF 236｜印刷页 213｜题号 4.9

---

## scut811-p1-q0190｜4.3｜error_discrimination

**知识点：** kp-4.3 CTFT性质

**题干：** 对实时域信号，学生只检查了 \(|X(-j\omega)|=|X(j\omega)|\) 就断言频谱正确。还缺什么？

- A. 零频值必须为零 · `WRONG_DC_COEFFICIENT`
- B. 还应满足相位为奇对称，即完整的共轭对称 ✅
- C. 幅度必须为奇函数 · `IGNORED_CONJUGATE_SYMMETRY`
- D. 频谱必须处处为实数 · `IGNORED_CONJUGATE_SYMMETRY`

**解析：** 正确：实时域信号要求 \(X(-j\omega)=X^*(j\omega)\)，不仅是幅度偶。错项提出过强或错误条件。易错点：共轭对称同时约束幅度与相位。

**来源：** 基于重点习题4.10（sinc组合、频域运算与Parseval）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.10
- OPPENHEIM-2E-LIU-01｜习题4.10｜PDF 236｜印刷页 213｜题号 4.10

---

## scut811-p1-q0191｜4.3｜error_discrimination

**知识点：** kp-4.3 CTFT性质

**题干：** 学生把Parseval写成 \(\int|x|^2dt=\int|X|^2d\omega\)。漏了什么？

- A. 两侧都不应取模平方 · `FORGOT_MAGNITUDE_SQUARED`
- B. 频域还应乘时间t · `CONFUSE_CT_DT`
- C. 频域积分前的 \(1/(2\pi)\) ✅
- D. 时域积分前的 \(2\pi\) · `WRONG_PARSEVAL_FACTOR`

**解析：** 正确：当前变换约定使频域能量需乘 \(1/2\pi\)。错项系数位置或能量定义错误。易错点：Parseval因子随变换约定变化。

**来源：** 基于重点习题4.12（频域微分、对偶与标准指数变换对）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.12
- OPPENHEIM-2E-LIU-01｜习题4.12｜PDF 237｜印刷页 214｜题号 4.12

---

## scut811-p1-q0192｜4.3｜error_discrimination

**知识点：** kp-4.3 CTFT性质

**题干：** 频移 \(e^{j\omega_0t}x(t)\) 被写成 \(X(j(\omega+\omega_0))\)。符号如何改？

- A. 应为 \(e^{-j\omega t_0}X(j\omega)\) · `WRONG_SHIFT_DIRECTION`
- B. 应为 \(X(j\omega)/\omega_0\) · `MISS_SCALE_FACTOR`
- C. 应为 \(X(j\omega_0)\) · `WRONG_FREQUENCY_SCALE`
- D. 应为 \(X(j(\omega-\omega_0))\) ✅

**解析：** 正确：乘 \(e^{+j\omega_0t}\) 把原频谱中心右移到 \(\omega_0\)。错项混入时移或取样。易错点：用原点谱峰移动方向检查符号。

**来源：** 基于重点习题4.14（由逆变换约束及Parseval恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.14
- OPPENHEIM-2E-LIU-01｜习题4.14｜PDF 237｜印刷页 214｜题号 4.14

---

## scut811-p1-q0193｜4.3｜error_discrimination

**知识点：** kp-4.3 CTFT性质

**题干：** 对偶性写成 \(X(jt)\leftrightarrow x(\omega)\) 时漏了哪两处？

- A. 漏 \(2\pi\) 且漏自变量反转 ✅
- B. 漏绝对值且漏共轭 · `MISSING_ABSOLUTE_VALUE`
- C. 漏卷积且漏积分 · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- D. 漏周期延拓且漏模N · `WRONG_MOD_N`

**解析：** 正确：CTFT对偶为 \(X(jt)\leftrightarrow2\pi x(-\omega)\)。错项列出无关操作。易错点：因子和反转必须一起核对。

**来源：** 基于重点习题4.15（由频谱实部与时域支撑恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.15
- OPPENHEIM-2E-LIU-01｜习题4.15｜PDF 237｜印刷页 214｜题号 4.15

---

## scut811-p1-q0194｜4.3｜error_discrimination

**知识点：** kp-4.3 CTFT性质

**题干：** 学生认为时间压缩后频谱也压缩。为什么错？

- A. 只有周期信号才会展宽 · `CONFUSE_CT_DT`
- B. 时间与频率尺度互为倒数，时间压缩会使频谱展宽 ✅
- C. 时间压缩只改变相位 · `WRONG_FREQUENCY_SCALE`
- D. 频谱应保持完全不变 · `INVALID_TIME_SCALING_FOR_LTI`

**解析：** 正确：\(x(at)\) 使用 \(X(j\omega/a)\)，所以 \(|a|>1\) 时频谱展宽。错项忽略尺度互逆。易错点：括号内除以a代表横轴展宽a倍。

**来源：** 基于重点习题4.24（从波形判断频谱实虚、相位、积分与周期性质）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.24
- OPPENHEIM-2E-LIU-01｜习题4.24｜PDF 239｜印刷页 216｜题号 4.24

---

## scut811-p1-q0195｜4.3｜error_discrimination

**知识点：** kp-4.3 CTFT性质

**题干：** 学生从 \(x(t)\) 为实信号推出 \(X(j\omega)\) 必为实偶函数。何时这一结论才成立？

- A. 还需 \(x(t)\) 为周期信号 · `WRONG_PERIOD`
- B. 还需 \(x(t)\) 为功率信号 · `CONFUSE_ENERGY_POWER`
- C. 还需 \(x(t)\) 为偶函数 ✅
- D. 还需 \(x(t)\) 为因果信号 · `CAUSALITY_ERROR`

**解析：** 正确：实性只保证共轭对称；再加偶性才使频谱实偶。错项给出的性质不推出实偶频谱。易错点：不要把“实”与“实偶”混为一谈。

**来源：** 基于重点习题4.25（频谱取值、积分、Parseval与偶部）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.25
- OPPENHEIM-2E-LIU-01｜习题4.25｜PDF 239｜印刷页 216｜题号 4.25

---

## scut811-p1-q0196｜4.4｜concept

**知识点：** kp-4.4 卷积性质

**题干：** 时域卷积在频域对应什么运算？

- A. 频谱卷积并乘 \(1/2\pi\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- B. 频谱相加 · `LINEARITY_ERROR`
- C. 频谱取模平方 · `FORGOT_MAGNITUDE_SQUARED`
- D. 频谱直接相乘 ✅

**解析：** 正确：\(x*h\leftrightarrow XH\)。错项混淆相乘性质、线性叠加和能量。易错点：时域卷积对应频域相乘。

**来源：** 基于重点习题4.11（卷积与时间尺度变换）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.11
- OPPENHEIM-2E-LIU-01｜习题4.11｜PDF 237｜印刷页 214｜题号 4.11

---

## scut811-p1-q0197｜4.4｜formula

**知识点：** kp-4.4 卷积性质

**题干：** 若 \(y(t)=x(t)*h(t)\)，则 \(Y(j\omega)\) 等于什么？

- A. \(X(j\omega)H(j\omega)\) ✅
- B. \(\frac1{2\pi}X*H\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- C. \(X+H\) · `LINEARITY_ERROR`
- D. \(X/H\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`

**解析：** 正确：卷积定理把时域卷积化为频域乘积。错项混入相乘定理、叠加或除法。易错点：系统频率响应由 \(Y/X\) 得到。

**来源：** 基于重点习题4.11（卷积与时间尺度变换）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.11
- OPPENHEIM-2E-LIU-01｜习题4.11｜PDF 237｜印刷页 214｜题号 4.11

---

## scut811-p1-q0198｜4.4｜formula

**知识点：** kp-4.4 卷积性质

**题干：** 频域卷积 \(X(j\omega)*H(j\omega)\) 对应的时域信号是什么？

- A. \(x(t)h(t)/(2\pi)\) · `MISSING_2PI`
- B. \(2\pi x(t)h(t)\) ✅
- C. \(x(t)h(t)\) · `MISSING_2PI`
- D. \(x(t)*h(t)\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`

**解析：** 正确：\(x h\leftrightarrow(1/2\pi)(X*H)\)，故 \(X*H\leftrightarrow2\pi xh\)。错项漏或倒置 \(2\pi\)，或混淆卷积。易错点：频域卷积的归一化必须按变换约定处理。

**来源：** 基于重点习题4.18（由频率响应求冲激响应，使用标准对与性质）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.18
- OPPENHEIM-2E-LIU-01｜习题4.18｜PDF 238｜印刷页 215｜题号 4.18

---

## scut811-p1-q0199｜4.4｜transform_pair

**知识点：** kp-4.4 卷积性质

**题干：** 已知 \(x_1\leftrightarrow X_1\)、\(x_2\leftrightarrow X_2\)，哪一对正确？

- A. \(x_1x_2\leftrightarrow X_1X_2\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- B. \(x_1*x_2\leftrightarrow(X_1+X_2)/2\) · `LINEARITY_ERROR`
- C. \(x_1*x_2\leftrightarrow X_1X_2\) ✅
- D. \(x_1*x_2\leftrightarrow X_1*X_2\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`

**解析：** 正确：时域卷积对应频域点乘。错项把两个域都写成卷积/相乘或误用线性平均。易错点：星号跨域后变成普通乘号。

**来源：** 基于重点习题4.11（卷积与时间尺度变换）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.11
- OPPENHEIM-2E-LIU-01｜习题4.11｜PDF 237｜印刷页 214｜题号 4.11

---

## scut811-p1-q0200｜4.4｜transform_pair

**知识点：** kp-4.4 卷积性质

**题干：** 若 \(x(t)*\delta(t-t_0)\) 的CTFT为哪一项？

- A. \(e^{j\omega t_0}X(j\omega)\) · `WRONG_SHIFT_DIRECTION`
- B. \(X(j(\omega-t_0))\) · `WRONG_SHIFT_DIRECTION`
- C. \(2\pi X(j\omega)\) · `MISSING_2PI`
- D. \(e^{-j\omega t_0}X(j\omega)\) ✅

**解析：** 正确：与移位冲激卷积得到 \(x(t-t_0)\)，再用时移性质。错项写反相位或混淆频移。易错点：冲激卷积执行的是时移。

**来源：** 基于重点习题4.18（由频率响应求冲激响应，使用标准对与性质）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.18
- OPPENHEIM-2E-LIU-01｜习题4.18｜PDF 238｜印刷页 215｜题号 4.18

---

## scut811-p1-q0201｜4.4｜error_discrimination

**知识点：** kp-4.4 卷积性质

**题干：** 学生写 \(x*h\leftrightarrow X*H\)。错误是什么？

- A. 时域卷积应对应频域普通乘积 \(XH\) ✅
- B. 应对应频域相加 · `LINEARITY_ERROR`
- C. 应对应 \(X/H\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- D. 应对应 \(|XH|^2\) · `FORGOT_MAGNITUDE_SQUARED`

**解析：** 正确：卷积定理将卷积变为乘法。错项引入加法、除法或能量。易错点：看清星号所在的域。

**来源：** 基于重点习题4.11（卷积与时间尺度变换）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.11
- OPPENHEIM-2E-LIU-01｜习题4.11｜PDF 237｜印刷页 214｜题号 4.11

---

## scut811-p1-q0202｜4.4｜error_discrimination

**知识点：** kp-4.4 卷积性质

**题干：** 学生由 \(Y=XH\) 求 \(H=XY\)。核心错误是什么？

- A. H只能在零频定义 · `WRONG_FREQUENCY_SCALE`
- B. 频率响应应取输出频谱除以输入频谱 ✅
- C. 应对X和Y做卷积 · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- D. H必须等于 \(|Y|^2\) · `FORGOT_MAGNITUDE_SQUARED`

**解析：** 正确：在 \(X\neq0\) 处 \(H=Y/X\)。错项把代数移项、能量或定义域弄错。易错点：LTI输入输出关系是乘法关系。

**来源：** 基于重点习题4.18（由频率响应求冲激响应，使用标准对与性质）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.18
- OPPENHEIM-2E-LIU-01｜习题4.18｜PDF 238｜印刷页 215｜题号 4.18

---

## scut811-p1-q0203｜4.4｜error_discrimination

**知识点：** kp-4.4 卷积性质

**题干：** 若两个时限矩形卷积，学生把输出支撑区间写成两个区间的交集。应如何判断？

- A. 卷积支撑等于第一个区间 · `WRONG_SUPPORT_INTERVAL`
- B. 卷积支撑由频谱交集决定 · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- C. 卷积支撑通常是两个支撑区间端点之和形成的区间 ✅
- D. 卷积支撑总为空集 · `WRONG_SUPPORT_INTERVAL`

**解析：** 正确：卷积非零条件由平移后重叠决定，支撑是Minkowski和。错项误用交集或忽略第二信号。易错点：端点分别相加可快速确定范围。

**来源：** 基于重点习题4.32（理想低通、周期及非周期输入的频域响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.32
- OPPENHEIM-2E-LIU-01｜习题4.32｜PDF 241｜印刷页 218｜题号 4.32

---

## scut811-p1-q0204｜4.4｜error_discrimination

**知识点：** kp-4.4 卷积性质

**题干：** 利用卷积定理求输出时，学生把 \(h(t-\tau)\) 写成 \(h(\tau-t)\)。发生了什么？

- A. 只改变了积分变量名 · `WRONG_CONVOLUTION_INDEX`
- B. 同时平移了两个信号 · `BOTH_SIGNALS_SHIFTED`
- C. 漏了 \(2\pi\) · `MISSING_2PI`
- D. 额外引入了时间反转，卷积核方向被改错 ✅

**解析：** 正确：\(h(t-\tau)\) 与 \(h(\tau-t)\) 一般不同，后者多一次反转。错项低估变化或混入其他错误。易错点：先对 \(h(\tau)\) 反转成 \(h(-\tau)\)，再平移。

**来源：** 基于重点习题4.11（卷积与时间尺度变换）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.11
- OPPENHEIM-2E-LIU-01｜习题4.11｜PDF 237｜印刷页 214｜题号 4.11

---

## scut811-p1-q0205｜4.5｜concept

**知识点：** kp-4.5 相乘性质

**题干：** 时域相乘在频域对应什么？

- A. 频域卷积并乘 \(1/(2\pi)\) ✅
- B. 频域直接相乘 · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- C. 频域相加 · `LINEARITY_ERROR`
- D. 频域卷积并乘 \(2\pi\) · `MISSING_2PI`

**解析：** 正确：\(x_1x_2\leftrightarrow(1/2\pi)(X_1*X_2)\)。错项混淆卷积定理或归一化方向。易错点：时域相乘常用于调制和加窗。

**来源：** 基于重点习题4.16（冲激列与时域相乘、周期频谱）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.16
- OPPENHEIM-2E-LIU-01｜习题4.16｜PDF 237｜印刷页 214｜题号 4.16

---

## scut811-p1-q0206｜4.5｜formula

**知识点：** kp-4.5 相乘性质

**题干：** 若 \(y(t)=x(t)g(t)\)，则 \(Y(j\omega)\) 是什么？

- A. \(X+G\) · `LINEARITY_ERROR`
- B. \(\frac1{2\pi}[X(j\omega)*G(j\omega)]\) ✅
- C. \(X(j\omega)G(j\omega)\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- D. \(2\pi[X*G]\) · `MISSING_2PI`

**解析：** 正确：时域乘积对应带 \(1/2\pi\) 的频域卷积。错项混成卷积定理或系数取反。易错点：括号内的星号是在频率变量上卷积。

**来源：** 基于重点习题4.16（冲激列与时域相乘、周期频谱）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.16
- OPPENHEIM-2E-LIU-01｜习题4.16｜PDF 237｜印刷页 214｜题号 4.16

---

## scut811-p1-q0207｜4.5｜formula

**知识点：** kp-4.5 相乘性质

**题干：** \(x(t)\cos\omega_0t\) 的频谱是什么？

- A. \(X(j\omega)\cos\omega_0\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- B. \(2[X(j(\omega-\omega_0))+X(j(\omega+\omega_0))]\) · `MISS_FACTOR_2`
- C. \(\frac12[X(j(\omega-\omega_0))+X(j(\omega+\omega_0))]\) ✅
- D. \(X(j(\omega-\omega_0))\) · `IGNORED_CONJUGATE_SYMMETRY`

**解析：** 正确：余弦由正负两个复指数各占1/2组成，产生双边频移副本。错项漏一侧、留在时域或系数错。易错点：实余弦调制一定产生两个频移副本。

**来源：** 基于重点习题4.42（正弦相乘、滤波与谐波系数提取）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.42
- OPPENHEIM-2E-LIU-01｜习题4.42｜PDF 244｜印刷页 221｜题号 4.42

---

## scut811-p1-q0208｜4.5｜transform_pair

**知识点：** kp-4.5 相乘性质

**题干：** 已知 \(x\leftrightarrow X\)，哪一对正确描述余弦调制？

- A. \(x(t)\cos\omega_0t\leftrightarrow X(j(\omega-\omega_0))\) · `IGNORED_CONJUGATE_SYMMETRY`
- B. \(x(t)\cos\omega_0t\leftrightarrow X(j\omega)\cos\omega_0\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- C. \(x(t)\cos\omega_0t\leftrightarrow2[X_-+X_+]\) · `MISS_FACTOR_2`
- D. \(x(t)\cos\omega_0t\leftrightarrow\frac12[X(j(\omega-\omega_0))+X(j(\omega+\omega_0))]\) ✅

**解析：** 正确：欧拉展开直接给两个各为1/2的移频谱。错项漏负频率副本或倍数错误。易错点：复指数调制产生一个副本，余弦调制产生两个。

**来源：** 基于重点习题4.16（冲激列与时域相乘、周期频谱）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.16
- OPPENHEIM-2E-LIU-01｜习题4.16｜PDF 237｜印刷页 214｜题号 4.16

---

## scut811-p1-q0209｜4.5｜error_discrimination

**知识点：** kp-4.5 相乘性质

**题干：** 学生写 \(x(t)g(t)\leftrightarrow X(j\omega)G(j\omega)\)。错在哪里？

- A. 时域相乘应对应频域卷积，并带 \(1/(2\pi)\) ✅
- B. 应对应频域相加 · `LINEARITY_ERROR`
- C. 应对时域先求导 · `WRONG_DIFFERENTIATION_FACTOR`
- D. 只需把G取共轭 · `IGNORED_CONJUGATE_SYMMETRY`

**解析：** 正确：点乘与卷积跨域互换。错项使用无关运算。易错点：频域直接相乘对应的是时域卷积。

**来源：** 基于重点习题4.16（冲激列与时域相乘、周期频谱）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.16
- OPPENHEIM-2E-LIU-01｜习题4.16｜PDF 237｜印刷页 214｜题号 4.16

---

## scut811-p1-q0210｜4.5｜error_discrimination

**知识点：** kp-4.5 相乘性质

**题干：** 余弦调制后学生只保留 \(X(j(\omega-\omega_0))\)。漏了什么？

- A. DTFT的周期延拓 · `WRONG_PERIOD`
- B. 向负频率方向移动的另一份频谱及两个1/2系数 ✅
- C. 时间反转后的频谱 · `MISSING_TIME_REVERSAL`
- D. 频谱模平方 · `FORGOT_MAGNITUDE_SQUARED`

**解析：** 正确：余弦含 \(e^{j\omega_0t}\) 与 \(e^{-j\omega_0t}\) 两项。错项混入无关性质。易错点：余弦不是单个复指数。

**来源：** 基于重点习题4.42（正弦相乘、滤波与谐波系数提取）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.42
- OPPENHEIM-2E-LIU-01｜习题4.42｜PDF 244｜印刷页 221｜题号 4.42

---

## scut811-p1-q0211｜4.5｜error_discrimination

**知识点：** kp-4.5 相乘性质

**题干：** 用矩形窗截短信号后，学生认为频谱也只是被矩形截断。核心错误是什么？

- A. 频谱只会整体平移 · `WRONG_SHIFT_DIRECTION`
- B. 频谱只需取模平方 · `FORGOT_MAGNITUDE_SQUARED`
- C. 时域乘窗会使原频谱与窗频谱卷积 ✅
- D. 时域乘窗不改变频谱 · `CONFUSE_CONVOLUTION_MULTIPLICATION`

**解析：** 正确：有限窗的sinc型频谱会与原谱卷积，引起展宽。错项忽略相乘定理。易错点：时域截断通常造成频谱泄漏。

**来源：** 基于重点习题4.43（相乘加低通滤波的等效LTI描述）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.43
- OPPENHEIM-2E-LIU-01｜习题4.43｜PDF 244｜印刷页 221｜题号 4.43

---

## scut811-p1-q0212｜4.5｜error_discrimination

**知识点：** kp-4.5 相乘性质

**题干：** 频域卷积公式中学生写成 \(Y=X*G\)，未乘任何系数。漏了什么？

- A. 漏了 \(2\pi\) · `MISSING_2PI`
- B. 漏了频率反转 · `MISSING_TIME_REVERSAL`
- C. 漏了绝对值平方 · `FORGOT_MAGNITUDE_SQUARED`
- D. 漏了 \(1/(2\pi)\) ✅

**解析：** 正确：在当前CTFT约定下，时域乘积的频域结果带 \(1/2\pi\)。错项给出相反系数或无关操作。易错点：先辨认是“时域相乘”再写因子。

**来源：** 基于重点习题4.46（正交调制配合低通实现等效带通的性质应用）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.46
- OPPENHEIM-2E-LIU-01｜习题4.46｜PDF 245｜印刷页 222｜题号 4.46

---

## scut811-p1-q0213｜4.6｜formula

**知识点：** kp-4.6 性质与基本变换对表

**题干：** 若 \(x(t)=e^{-a|t|},a>0\)，其频谱零频值是多少？

- A. \(2/a\) ✅
- B. \(1/a\) · `MISS_FACTOR_2`
- C. \(2a\) · `MISS_SCALE_FACTOR`
- D. \(0\) · `SIGN_ERROR`

**解析：** 正确：频谱为 \(2a/(a^2+\omega^2)\)，令 \(\omega=0\) 得 \(2/a\)。错项漏双边贡献或取倒尺度。易错点：零频值也等于时域面积。

**来源：** 基于重点习题4.8（时域积分、微分与矩形脉冲变换对）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.8
- OPPENHEIM-2E-LIU-01｜习题4.8｜PDF 236｜印刷页 213｜题号 4.8

---

## scut811-p1-q0214｜4.6｜formula

**知识点：** kp-4.6 性质与基本变换对表

**题干：** 若 \(x(t)=\delta(t-t_0)\)，其频谱相位是什么？

- A. \(0\) · `WRONG_SHIFT_DIRECTION`
- B. \(-\omega t_0\) ✅
- C. \(\omega t_0\) · `WRONG_SHIFT_DIRECTION`
- D. \(-t_0/\omega\) · `WRONG_FREQUENCY_SCALE`

**解析：** 正确：频谱为 \(e^{-j\omega t_0}\)，相位是 \(-\omega t_0\)。错项写反或忽略线性相位。易错点：延时的幅度谱不变。

**来源：** 基于重点习题4.9（常见变换对、实虚部与奇偶分解）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.9
- OPPENHEIM-2E-LIU-01｜习题4.9｜PDF 236｜印刷页 213｜题号 4.9

---

## scut811-p1-q0215｜4.6｜formula

**知识点：** kp-4.6 性质与基本变换对表

**题干：** 由 \(u(t)-u(t-T)\) 构成的宽度T矩形脉冲，其零频频谱值是多少？

- A. \(2T\) · `MISS_FACTOR_2`
- B. \(2\pi T\) · `MISSING_2PI`
- C. \(T\) ✅
- D. \(1\) · `MISS_SCALE_FACTOR`

**解析：** 正确：零频值等于时域积分面积T。错项忽略宽度、误按对称脉冲或多乘常数。易错点：先用面积快速核对变换对。

**来源：** 基于重点习题4.10（sinc组合、频域运算与Parseval）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.10
- OPPENHEIM-2E-LIU-01｜习题4.10｜PDF 236｜印刷页 213｜题号 4.10

---

## scut811-p1-q0216｜4.6｜transform_pair

**知识点：** kp-4.6 性质与基本变换对表

**题干：** 宽度T、中心在0的单位矩形脉冲对应哪一频谱？

- A. \(\mathrm{sinc}(\omega/T)\) · `WRONG_FREQUENCY_SCALE`
- B. \(T^2\mathrm{sinc}(\omega T)\) · `MISS_SCALE_FACTOR`
- C. \(e^{-j\omega T}\) · `WRONG_SHIFT_DIRECTION`
- D. \(T\,\mathrm{sinc}(\omega T/2)\)，其中 \(\mathrm{sinc}(x)=\sin x/x\) ✅

**解析：** 正确：从 \(-T/2\) 到 \(T/2\) 积分得 \(2\sin(\omega T/2)/\omega\)。错项尺度、幅度或时移性质错误。易错点：零频极限应为T。

**来源：** 基于重点习题4.8（时域积分、微分与矩形脉冲变换对）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.8
- OPPENHEIM-2E-LIU-01｜习题4.8｜PDF 236｜印刷页 213｜题号 4.8

---

## scut811-p1-q0217｜4.6｜transform_pair

**知识点：** kp-4.6 性质与基本变换对表

**题干：** \(e^{-at}u(t),a>0\) 的正确变换对是哪一个？

- A. \(e^{-at}u(t)\leftrightarrow1/(a+j\omega)\) ✅
- B. \(e^{-at}u(t)\leftrightarrow1/(a-j\omega)\) · `SIGN_ERROR`
- C. \(e^{-at}u(t)\leftrightarrow2a/(a^2+\omega^2)\) · `MISSING_TIME_REVERSAL`
- D. \(e^{-at}u(t)\leftrightarrow a+j\omega\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`

**解析：** 正确：右边指数直接积分得到 \(1/(a+j\omega)\)。错项核符号、双边信号或倒数错误。易错点：用零频面积 \(1/a\) 检查。

**来源：** 基于重点习题4.9（常见变换对、实虚部与奇偶分解）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.9
- OPPENHEIM-2E-LIU-01｜习题4.9｜PDF 236｜印刷页 213｜题号 4.9

---

## scut811-p1-q0218｜4.6｜transform_pair

**知识点：** kp-4.6 性质与基本变换对表

**题干：** \(e^{at}u(-t),a>0\) 的CTFT是哪一个？

- A. \(2a/(a^2+\omega^2)\) · `MISSING_TIME_REVERSAL`
- B. \(1/(a-j\omega)\) ✅
- C. \(1/(a+j\omega)\) · `SIGN_ERROR`
- D. \(-1/(a-j\omega)\) · `MISS_SCALE_FACTOR`

**解析：** 正确：左边指数从负无穷积分到0，得 \(1/(a-j\omega)\)。错项混作右边或双边指数。易错点：左右支撑决定 \(j\omega\) 的符号。

**来源：** 基于重点习题4.10（sinc组合、频域运算与Parseval）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.10
- OPPENHEIM-2E-LIU-01｜习题4.10｜PDF 236｜印刷页 213｜题号 4.10

---

## scut811-p1-q0219｜4.6｜transform_pair

**知识点：** kp-4.6 性质与基本变换对表

**题干：** \(\delta(t-t_0)\) 的CTFT是什么？

- A. \(2\pi\delta(\omega-t_0)\) · `CONFUSE_IMPULSE_STEP`
- B. \(\delta(\omega)e^{-jt_0}\) · `CONFUSE_CT_DT`
- C. \(e^{-j\omega t_0}\) ✅
- D. \(e^{j\omega t_0}\) · `WRONG_SHIFT_DIRECTION`

**解析：** 正确：冲激抽样使积分核在 \(t_0\) 处取值。错项写反符号或把时间位置当频率位置。易错点：移位冲激的幅度谱恒为1。

**来源：** 基于重点习题4.12（频域微分、对偶与标准指数变换对）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.12
- OPPENHEIM-2E-LIU-01｜习题4.12｜PDF 237｜印刷页 214｜题号 4.12

---

## scut811-p1-q0220｜4.6｜transform_pair

**知识点：** kp-4.6 性质与基本变换对表

**题干：** \(\cos\omega_0t\) 的正确变换对是哪一个？

- A. \(\cos\omega_0t\leftrightarrow2\pi\delta(\omega-\omega_0)\) · `IGNORED_CONJUGATE_SYMMETRY`
- B. \(\cos\omega_0t\leftrightarrow j\pi[\delta(\omega+\omega_0)-\delta(\omega-\omega_0)]\) · `SIGN_ERROR`
- C. \(\cos\omega_0t\leftrightarrow\delta(\omega-\omega_0)\) · `MISSING_2PI`
- D. \(\cos\omega_0t\leftrightarrow\pi[\delta(\omega-\omega_0)+\delta(\omega+\omega_0)]\) ✅

**解析：** 正确：余弦由正负两条各为1/2的复指数构成。错项漏一侧、混作正弦或漏权重。易错点：实时域偶信号对应实偶频谱。

**来源：** 基于重点习题4.14（由逆变换约束及Parseval恢复信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.14
- OPPENHEIM-2E-LIU-01｜习题4.14｜PDF 237｜印刷页 214｜题号 4.14

---

## scut811-p1-q0221｜4.6｜transform_pair

**知识点：** kp-4.6 性质与基本变换对表

**题干：** \(\sin\omega_0t\) 的频谱应具有什么形式？

- A. 两条纯虚、符号相反的冲激谱线 ✅
- B. 两条实数且同号的冲激谱线 · `SIGN_ERROR`
- C. 单条正频率实冲激 · `IGNORED_CONJUGATE_SYMMETRY`
- D. 连续实偶频谱 · `CONFUSE_CT_DT`

**解析：** 正确：实奇正弦对应纯虚奇频谱。错项混作余弦、漏负频率或误作连续谱。易错点：先用时域奇偶性检查频谱形态。

**来源：** 基于重点习题4.16（冲激列与时域相乘、周期频谱）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.16
- OPPENHEIM-2E-LIU-01｜习题4.16｜PDF 237｜印刷页 214｜题号 4.16

---

## scut811-p1-q0222｜4.6｜transform_pair

**知识点：** kp-4.6 性质与基本变换对表

**题干：** 符号函数 \(\operatorname{sgn}(t)\) 的CTFT在广义意义下是哪一项？

- A. \(2\pi\delta(\omega)\) · `CONFUSE_IMPULSE_STEP`
- B. \(2/(j\omega)\) ✅
- C. \(1/(j\omega)\) · `MISS_FACTOR_2`
- D. \(2j\omega\) · `WRONG_DIFFERENTIATION_FACTOR`

**解析：** 正确：由 \(d\,\operatorname{sgn}(t)/dt=2\delta(t)\) 得 \(j\omega X=2\)。错项漏2、倒置微分因子或混成常数信号。易错点：此处按主值分布理解。

**来源：** 基于重点习题4.18（由频率响应求冲激响应，使用标准对与性质）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.18
- OPPENHEIM-2E-LIU-01｜习题4.18｜PDF 238｜印刷页 215｜题号 4.18

---

## scut811-p1-q0223｜4.6｜transform_pair

**知识点：** kp-4.6 性质与基本变换对表

**题干：** 下列哪一个是正确的冲激导数变换对？

- A. \(\delta^{\prime}(t)\leftrightarrow1/(j\omega)\) · `WRONG_DIFFERENTIATION_FACTOR`
- B. \(\delta^{\prime}(t)\leftrightarrow\omega^2\) · `WRONG_DIFFERENTIATION_FACTOR`
- C. \(\delta^{\prime}(t)\leftrightarrow j\omega\) ✅
- D. \(\delta^{\prime}(t)\leftrightarrow-j\omega\) · `SIGN_ERROR`

**解析：** 正确：时域微分对应乘 \(j\omega\)，而 \(\delta\leftrightarrow1\)。错项写反符号或混作积分/二阶微分。易错点：每微分一次多乘一个 \(j\omega\)。

**来源：** 基于重点习题4.32（理想低通、周期及非周期输入的频域响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.32
- OPPENHEIM-2E-LIU-01｜习题4.32｜PDF 241｜印刷页 218｜题号 4.32

---

## scut811-p1-q0224｜4.6｜transform_pair

**知识点：** kp-4.6 性质与基本变换对表

**题干：** 三角脉冲可看作两个矩形脉冲卷积，因此其频谱具有哪种基本形态？

- A. 矩形脉冲频谱本身 · `MISS_FACTOR_2`
- B. 两个频谱的卷积 · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- C. 纯相位线性函数 · `WRONG_SHIFT_DIRECTION`
- D. 矩形脉冲频谱的平方，即sinc平方形态 ✅

**解析：** 正确：时域卷积对应频域乘积，同形矩形卷积得到频谱平方。错项漏一次因子或把域关系写反。易错点：归一化取决于三角脉冲定义，但平方形态不变。

**来源：** 基于重点习题4.37（卷积周期化与FS系数、CTFT采样关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.37
- OPPENHEIM-2E-LIU-01｜习题4.37｜PDF 243｜印刷页 220｜题号 4.37

---

## scut811-p1-q0225｜4.6｜error_discrimination

**知识点：** kp-4.6 性质与基本变换对表

**题干：** 变换对表中把 \(e^{-a|t|}\) 的频谱写成 \(1/(a+j\omega)\)。错在哪里？

- A. 把双边指数误写成了右边指数的频谱 ✅
- B. 漏了时间延迟 · `WRONG_SHIFT_DIRECTION`
- C. 应使用DTFT · `CONFUSE_CT_DT`
- D. 频谱应为冲激列 · `WRONG_PERIOD`

**解析：** 正确：双边指数频谱是实偶的 \(2a/(a^2+\omega^2)\)。错项给出无关性质。易错点：先看时域支撑是单边还是双边。

**来源：** 基于重点习题4.8（时域积分、微分与矩形脉冲变换对）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.8
- OPPENHEIM-2E-LIU-01｜习题4.8｜PDF 236｜印刷页 213｜题号 4.8

---

## scut811-p1-q0226｜4.6｜error_discrimination

**知识点：** kp-4.6 性质与基本变换对表

**题干：** 学生写 \(\delta^{\prime}(t)\leftrightarrow1/(j\omega)\)。他把哪两个操作混淆了？

- A. 把实性误成偶性 · `IGNORED_CONJUGATE_SYMMETRY`
- B. 把微分误成了积分 ✅
- C. 把时移误成频移 · `WRONG_SHIFT_DIRECTION`
- D. 把卷积误成相乘 · `CONFUSE_CONVOLUTION_MULTIPLICATION`

**解析：** 正确：微分对应乘 \(j\omega\)，除以 \(j\omega\) 与积分相关。错项与该变换对无关。易错点：导数次数越高，频域乘幂越高。

**来源：** 基于重点习题4.9（常见变换对、实虚部与奇偶分解）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.9
- OPPENHEIM-2E-LIU-01｜习题4.9｜PDF 236｜印刷页 213｜题号 4.9

---

## scut811-p1-q0227｜4.6｜error_discrimination

**知识点：** kp-4.6 性质与基本变换对表

**题干：** 对中心在0的实偶矩形脉冲，某答案给出带非零线性相位的频谱。最可能的问题是什么？

- A. 漏了卷积 · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- B. 漏了模平方 · `FORGOT_MAGNITUDE_SQUARED`
- C. 无端引入了时间平移 ✅
- D. 漏了复共轭 · `IGNORED_CONJUGATE_SYMMETRY`

**解析：** 正确：中心在0的实偶信号应有实偶频谱，不应有延时线性相位。错项不是线性相位来源。易错点：频谱相位可反查时域中心位置。

**来源：** 基于重点习题4.10（sinc组合、频域运算与Parseval）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题列表｜PDF 4｜印刷页 —｜题号 4.10
- OPPENHEIM-2E-LIU-01｜习题4.10｜PDF 236｜印刷页 213｜题号 4.10

---

## scut811-p1-q0228｜4.7｜concept

**知识点：** kp-4.7 常系数微分方程系统

**题干：** 零初始条件下，常系数微分方程系统的频率响应如何得到？

- A. 把所有导数直接删去 · `OUTPUT_NOT_DIFFERENTIATED`
- B. 令 \(t=0\) 后取 \(Y/X\) · `WRONG_FREQUENCY_SCALE`
- C. 只对输入作CTFT · `LINEARITY_ERROR`
- D. 对方程作CTFT并取 \(H=Y/X\) ✅

**解析：** 正确：每阶导数替换为 \((j\omega)^k\)，再代数求比值。错项忽略导数或没有完整变换。易错点：输出侧和输入侧的导数都要处理。

**来源：** 基于奥本海姆第二版第4.7节 由线性常系数微分方程表征的系统的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第4.7节 由线性常系数微分方程表征的系统｜PDF 233｜印刷页 210

---

## scut811-p1-q0229｜4.7｜error_discrimination

**知识点：** kp-4.7 常系数微分方程系统

**题干：** 由 \(y^{\prime}(t)+2y(t)=x(t)\)，学生得 \(H(j\omega)=j\omega+2\)。核心错误是什么？

- A. 把分母多项式当成频率响应，正确应为 \(1/(j\omega+2)\) ✅
- B. 导数应换成 \(e^{-j\omega}\) · `CONFUSE_CT_DT`
- C. 常数2应换成 \(2\pi\) · `MISSING_2PI`
- D. 输出还应再求一次导数 · `OUTPUT_NOT_DIFFERENTIATED`

**解析：** 正确：\((j\omega+2)Y=X\)，所以 \(H=Y/X=1/(j\omega+2)\)。错项混入离散性质或无关操作。易错点：变换后先把Y与X分居两侧再取比值。

**来源：** 基于奥本海姆第二版第4.7节 由线性常系数微分方程表征的系统的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第4.7节 由线性常系数微分方程表征的系统｜PDF 233｜印刷页 210

---

## scut811-p1-sample-012｜4.6｜transform_pair

**知识点：** kp-4.6 性质与基本变换对表

**题干：** 按 \(X(j\omega)=\int_{-\infty}^{\infty}x(t)e^{-j\omega t}dt\) 的约定，\(e^{-|t|}\) 的傅里叶变换是哪一个？

- A. \(\frac{1}{1+j\omega}\)
- B. \(\frac{1}{1-j\omega}\) · `SIGN_ERROR`
- C. \(\frac{2}{1+j\omega^2}\) · `SIGN_ERROR`
- D. \(\frac{2}{1+\omega^2}\) ✅

**解析：** 正确：双边指数可分成正、负时间两段，两个单边变换相加得到 \(2/(1+\omega^2)\)。错误项把双边信号当成单边指数，或给实偶信号配了复数频谱。易错点：实偶时域信号的频谱应为实偶函数。

**来源：** 重点习题4.12给出的双边指数基本变换对及性质应用。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题清单｜PDF 4｜印刷页 —｜题号 4.12
- OPPENHEIM-2E-LIU-01｜第4章习题4.12给出的变换对｜PDF 237｜印刷页 214｜题号 4.12

---

## scut811-p1-sample-013｜4.3｜error_discrimination

**知识点：** kp-4.3 CTFT性质

**题干：** 已知 \(x(t)\leftrightarrow X(j\omega)\)。时移信号 \(x(t-t_0)\) 的傅里叶变换是哪一个？

- A. \(e^{-j\omega t_0}X(j\omega)\) ✅
- B. \(e^{j\omega t_0}X(j\omega)\) · `SIGN_ERROR`
- C. \(X\bigl(j(\omega-t_0)\bigr)\) · `WRONG_SHIFT_DIRECTION`
- D. \(e^{-jt_0}X(j\omega)\) · `WRONG_FREQUENCY_SCALE`

**解析：** 正确：时域延迟 \(t_0\) 在频域乘上线性相位 \(e^{-j\omega t_0}\)。错误项把相位符号写反、误当成频移，或漏掉 \(\omega\)。易错点：\(x(t-t_0)\) 是右移，对应负号相位。

**来源：** 重点习题4.29的线性相位、反转与时移关系，抽取时移符号辨析。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题清单｜PDF 4｜印刷页 —｜题号 4.29
- OPPENHEIM-2E-LIU-01｜第4章习题4.29｜PDF 241｜印刷页 218｜题号 4.29

---

## scut811-p1-sample-014｜4.3｜formula

**知识点：** kp-4.3 CTFT性质

**题干：** 已知 \(x(t)\leftrightarrow X(j\omega)\)，且 \(a\neq0\)。\(x(at)\) 的傅里叶变换是哪一个？

- A. \(X(ja\omega)\) · `MISS_SCALE_FACTOR`
- B. \(\frac1aX\left(j\frac{\omega}{a}\right)\) · `MISS_SCALE_FACTOR`
- C. \(\frac1{|a|}X\left(j\frac{\omega}{a}\right)\) ✅
- D. \(|a|X(ja\omega)\) · `WRONG_FREQUENCY_SCALE`

**解析：** 正确：变量代换给出幅度因子 \(1/|a|\)，频率轴按 \(\omega/a\) 反向缩放。错误项漏掉尺度因子、在 \(a<0\) 时丢失绝对值，或把频率缩放方向写反。易错点：必须是 \(1/|a|\)，不是 \(1/a\)。

**来源：** 重点习题4.11的卷积与时间尺度变换模型，抽取CTFT尺度公式。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题清单｜PDF 4｜印刷页 —｜题号 4.11
- OPPENHEIM-2E-LIU-01｜第4章习题4.11｜PDF 237｜印刷页 214｜题号 4.11

---

## scut811-p1-sample-015｜4.4｜transform_pair

**知识点：** kp-4.4 卷积性质

**题干：** 若 \(x(t)\leftrightarrow X(j\omega)\)、\(h(t)\leftrightarrow H(j\omega)\)，则 \(y(t)=x(t)*h(t)\) 对应的 \(Y(j\omega)\) 是什么？

- A. \(\frac1{2\pi}X(j\omega)H(j\omega)\) · `MISS_SCALE_FACTOR`
- B. \(X(j\omega)H(j\omega)\) ✅
- C. \(X(j\omega)*H(j\omega)\)
- D. \(\frac1{2\pi}[X(j\omega)*H(j\omega)]\)

**解析：** 正确：时域卷积对应频域直接相乘，不带 \(1/(2\pi)\)。错误项把相乘性质的频域卷积套进来，或附加错误常数因子。易错点：在本书约定下，时域相乘才对应 \(\frac1{2\pi}\) 倍的频域卷积。

**来源：** 重点习题4.11直接给出时域卷积模型，用于卷积定理快速配对。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第4章重点课后题清单｜PDF 4｜印刷页 —｜题号 4.11
- OPPENHEIM-2E-LIU-01｜第4章习题4.11｜PDF 237｜印刷页 214｜题号 4.11

---

## scut811-p1-sample-016｜4.5｜transform_pair

**知识点：** kp-4.5 相乘性质

**题干：** 若 \(g(t)=x(t)y(t)\)，且 \(x(t)\leftrightarrow X(j\omega)\)、\(y(t)\leftrightarrow Y(j\omega)\)，则 \(G(j\omega)\) 是什么？

- A. \(X(j\omega)Y(j\omega)\)
- B. \(2\pi[X(j\omega)*Y(j\omega)]\) · `MISS_SCALE_FACTOR`
- C. \(X(j\omega)*Y(j\omega)\) · `MISSING_2PI`
- D. \(\frac1{2\pi}[X(j\omega)*Y(j\omega)]\) ✅

**解析：** 正确：按当前CTFT正逆变换约定，时域相乘对应 \(G=(1/2\pi)(X*Y)\)。错误项把它误写成频域相乘，或漏掉、倒置 \(2\pi\) 因子。易错点：常数因子取决于傅里叶变换约定，本题采用教材约定。

**来源：** 教材第4章习题4.41推导的连续时间傅里叶变换相乘性质。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第4章习题4.41，相乘性质推导｜PDF 244｜印刷页 221｜题号 4.41

---
