# 第3章人工审题（65题）

> 当前状态：reviewed=65。内容审核门槛：正确答案正确、题干无实质歧义、无明显错误知识、无严重重复或低价值题。来源和 machine error tag 的精细问题不阻塞 reviewed，但 verified 仍须最终核验。

## scut811-p1-q0089｜3.2｜concept

**知识点：** kp-3.2 LTI对复指数响应

**题干：** 为什么复指数 \(e^{st}\) 对LTI系统特别重要？

- A. 它是LTI系统的特征函数，输出只改变复幅度 ✅
- B. 它通过任何系统都保持不变 · `LINEARITY_ERROR`
- C. 它只适用于非线性系统 · `LINEARITY_ERROR`
- D. 它的频率总是0 · `WRONG_FREQUENCY_SCALE`

**解析：** 正确：若收敛，LTI系统对 \(e^{st}\) 的响应为 \(H(s)e^{st}\)。错项夸大为任意系统或误判频率。易错点：保持的是函数形状，不是幅度。

**来源：** 基于重点习题3.13（周期输入经LTI系统的谐波响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.13
- OPPENHEIM-2E-LIU-01｜习题3.13｜PDF 184｜印刷页 161｜题号 3.13

---

## scut811-p1-q0090｜3.2｜concept

**知识点：** kp-3.2 LTI对复指数响应

**题干：** 连续LTI系统输入 \(e^{j\omega_1t}\) 时，稳态输出相位相对输入改变多少？

- A. 一定不改变 · `SIGN_ERROR`
- B. \(\angle H(j\omega_1)\) ✅
- C. \(|H(j\omega_1)|\) · `WRONG_FREQUENCY_SCALE`
- D. \(\omega_1\angle H(j\omega_1)\) · `WRONG_FREQUENCY_SCALE`

**解析：** 正确：频率响应的相角给出该频率正弦分量的相移。错项把幅度响应当相移或多乘频率。易错点：幅度乘 \(|H|\)，相位加 \(\angle H\)。

**来源：** 基于重点习题3.15（理想低通滤波与谐波筛选）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.15
- OPPENHEIM-2E-LIU-01｜习题3.15｜PDF 184｜印刷页 161｜题号 3.15

---

## scut811-p1-q0091｜3.2｜formula

**知识点：** kp-3.2 LTI对复指数响应

**题干：** 若 \(h(t)\) 为LTI系统冲激响应，则输入 \(e^{j\omega_0t}\) 的输出系数是什么？

- A. \(h(j\omega_0)\) · `CONFUSE_CT_DT`
- B. \(\int |h(\tau)|^2d\tau\) · `FORGOT_MAGNITUDE_SQUARED`
- C. \(H(j\omega_0)=\int_{-\infty}^{\infty}h(\tau)e^{-j\omega_0\tau}d\tau\) ✅
- D. \(\int h(\tau)e^{j\omega_0\tau}d\tau\) · `SIGN_ERROR`

**解析：** 正确：把复指数代入卷积后可提出 \(e^{j\omega_0t}\)，剩余积分就是频率响应。错项写反指数符号或混淆时域函数与能量。易错点：定义中的核为 \(e^{-j\omega t}\)。

**来源：** 基于重点习题3.13（周期输入经LTI系统的谐波响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.13
- OPPENHEIM-2E-LIU-01｜习题3.13｜PDF 184｜印刷页 161｜题号 3.13

---

## scut811-p1-q0092｜3.2｜error_discrimination

**知识点：** kp-3.2 LTI对复指数响应

**题干：** 输入是 \(e^{j3t}\)，学生把LTI输出写成 \(H(j)e^{j3t}\)。应如何改正？

- A. \(H(jt)e^{j3t}\) · `WRONG_FREQUENCY_SCALE`
- B. \(H(j)e^{jt}\) · `WRONG_FREQUENCY_SCALE`
- C. \(H(3)e^{-j3t}\) · `SIGN_ERROR`
- D. \(H(j3)e^{j3t}\) ✅

**解析：** 正确：频率响应必须在输入角频率3处取值。错项漏频率、保留时间变量或改错符号。易错点：\(H\) 的自变量是频率，不是时间。

**来源：** 基于重点习题3.13（周期输入经LTI系统的谐波响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.13
- OPPENHEIM-2E-LIU-01｜习题3.13｜PDF 184｜印刷页 161｜题号 3.13

---

## scut811-p1-q0093｜3.2｜error_discrimination

**知识点：** kp-3.2 LTI对复指数响应

**题干：** 学生认为复指数通过LTI系统后频率会变成 \(|H(j\omega_0)|\omega_0\)。核心错误是什么？

- A. LTI系统不改变单个复指数的频率，只改变复幅度 ✅
- B. 频率应变成 \(\omega_0+\angle H\) · `WRONG_FREQUENCY_SCALE`
- C. 频率应变成 \(-\omega_0\) · `SIGN_ERROR`
- D. 只有非因果系统才保持频率 · `CAUSALITY_ERROR`

**解析：** 正确：特征函数性质保留 \(e^{j\omega_0t}\) 的频率。错项把增益或相位加到频率上。易错点：输出频率仍为 \(\omega_0\)。

**来源：** 基于重点习题3.15（理想低通滤波与谐波筛选）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.15
- OPPENHEIM-2E-LIU-01｜习题3.15｜PDF 184｜印刷页 161｜题号 3.15

---

## scut811-p1-q0094｜3.3｜concept

**知识点：** kp-3.3 CTFS表示与系数

**题干：** 连续时间周期信号的CTFS系数 \(a_0\) 表示什么？

- A. 最高次谐波幅度 · `WRONG_HARMONIC_INDEX`
- B. 一个周期内的平均值（直流分量） ✅
- C. 基波角频率 · `WRONG_DC_COEFFICIENT`
- D. 信号总能量 · `CONFUSE_ENERGY_POWER`

**解析：** 正确：令 \(k=0\) 时指数核为1，\(a_0=(1/T_0)\int_{T_0}x(t)dt\)。错项混淆频率、能量和最高谐波。易错点：直流项不是基波项。

**来源：** 基于重点习题3.3（谐波组合的基本频率及CTFS系数）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.3
- OPPENHEIM-2E-LIU-01｜习题3.3｜PDF 183｜印刷页 160｜题号 3.3

---

## scut811-p1-q0095｜3.3｜formula

**知识点：** kp-3.3 CTFS表示与系数

**题干：** 指数型CTFS分析公式是哪一个？

- A. \(a_k=\frac1{2\pi}\int x(t)e^{-j\omega t}dt\) · `CONFUSE_CT_DT`
- B. \(a_k=\frac1{T_0}\int_{T_0}|x(t)|^2dt\) · `FORGOT_MAGNITUDE_SQUARED`
- C. \(a_k=\frac1{T_0}\int_{T_0}x(t)e^{-jk\omega_0t}dt\) ✅
- D. \(a_k=\int_{T_0}x(t)e^{jk\omega_0t}dt\) · `SIGN_ERROR`

**解析：** 正确：CTFS系数在任一完整周期上积分，并带 \(1/T_0\) 和负指数核。错项漏归一化、写反符号或混入能量。易错点：积分区间长度必须恰为一个周期。

**来源：** 基于重点习题3.3（谐波组合的基本频率及CTFS系数）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.3
- OPPENHEIM-2E-LIU-01｜习题3.3｜PDF 183｜印刷页 160｜题号 3.3

---

## scut811-p1-q0096｜3.3｜formula

**知识点：** kp-3.3 CTFS表示与系数

**题干：** 若 \(x(t)=A\cos(k_0\omega_0t+\phi)\)，正频率系数 \(a_{k_0}\) 是什么？

- A. \(Ae^{j\phi}\) · `MISS_FACTOR_2`
- B. \(\frac A2e^{-j\phi}\) · `SIGN_ERROR`
- C. \(\frac A2e^{jk_0\phi}\) · `WRONG_HARMONIC_INDEX`
- D. \(\frac A2e^{j\phi}\) ✅

**解析：** 正确：欧拉展开的正频率项系数为 \((A/2)e^{j\phi}\)。错项漏二分之一、相位符号错或多乘谐波下标。易错点：负频率系数才是 \((A/2)e^{-j\phi}\)。

**来源：** 基于重点习题3.3（谐波组合的基本频率及CTFS系数）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.3
- OPPENHEIM-2E-LIU-01｜习题3.3｜PDF 183｜印刷页 160｜题号 3.3

---

## scut811-p1-q0097｜3.3｜formula

**知识点：** kp-3.3 CTFS表示与系数

**题干：** 周期矩形脉冲每周期在 \(|t|<T_1\) 为1，周期为 \(T_0\)。其直流系数是多少？

- A. \(a_0=2T_1/T_0\) ✅
- B. \(a_0=T_1/T_0\) · `MISS_FACTOR_2`
- C. \(a_0=T_0/(2T_1)\) · `WRONG_COEFFICIENT_NORMALIZATION`
- D. \(a_0=2T_1\) · `WRONG_COEFFICIENT_NORMALIZATION`

**解析：** 正确：直流系数等于占空比，脉冲宽度为 \(2T_1\)。错项漏掉两侧宽度、取倒数或漏周期归一化。易错点：先确认区间是 \(-T_1\) 到 \(T_1\)。

**来源：** 基于重点习题3.3（谐波组合的基本频率及CTFS系数）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.3
- OPPENHEIM-2E-LIU-01｜习题3.3｜PDF 183｜印刷页 160｜题号 3.3

---

## scut811-p1-q0098｜3.3｜formula

**知识点：** kp-3.3 CTFS表示与系数

**题干：** 若周期信号只含 \(a_{-2}=a_2=1/2\)，其他系数为0，则时域信号是什么？

- A. \(j\sin(2\omega_0t)\) · `SIGN_ERROR`
- B. \(\cos(2\omega_0t)\) ✅
- C. \(2\cos(2\omega_0t)\) · `MISS_FACTOR_2`
- D. \(\cos(\omega_0t)\) · `WRONG_HARMONIC_INDEX`

**解析：** 正确：一对各为1/2的共轭对合成为余弦。错项漏系数、用错谐波下标或错配正弦。易错点：正负频率两项要一起合并。

**来源：** 基于重点习题3.3（谐波组合的基本频率及CTFS系数）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.3
- OPPENHEIM-2E-LIU-01｜习题3.3｜PDF 183｜印刷页 160｜题号 3.3

---

## scut811-p1-q0099｜3.3｜transform_pair

**知识点：** kp-3.3 CTFS表示与系数

**题干：** 在周期 \(T_0\) 的CTFS中，常数信号 \(x(t)=C\) 对应哪组系数？

- A. \(a_1=C\)，其余为0 · `WRONG_HARMONIC_INDEX`
- B. \(a_0=C/T_0\)，其余为0 · `WRONG_COEFFICIENT_NORMALIZATION`
- C. \(a_0=C\)，其余 \(a_k=0\) ✅
- D. 所有 \(a_k=C\) · `WRONG_DC_COEFFICIENT`

**解析：** 正确：常数只有直流分量。错项把常数分配到所有谐波、基波或重复归一化。易错点：综合式中的 \(a_0\) 就是常数值。

**来源：** 基于重点习题3.3（谐波组合的基本频率及CTFS系数）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.3
- OPPENHEIM-2E-LIU-01｜习题3.3｜PDF 183｜印刷页 160｜题号 3.3

---

## scut811-p1-q0100｜3.3｜transform_pair

**知识点：** kp-3.3 CTFS表示与系数

**题干：** \(x(t)=\sin(2\omega_0t)\) 的非零CTFS系数是哪组？

- A. \(a_2=a_{-2}=1/2\) · `IGNORED_CONJUGATE_SYMMETRY`
- B. \(a_1=1/(2j),\ a_{-1}=-1/(2j)\) · `WRONG_HARMONIC_INDEX`
- C. \(a_2=a_{-2}=1/(2j)\) · `SIGN_ERROR`
- D. \(a_2=1/(2j),\ a_{-2}=-1/(2j)\) ✅

**解析：** 正确：\(\sin\theta=(e^{j\theta}-e^{-j\theta})/(2j)\)。错项错配余弦、谐波下标或负频率符号。易错点：实奇信号的系数为纯虚且共轭反对称。

**来源：** 基于重点习题3.3（谐波组合的基本频率及CTFS系数）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.3
- OPPENHEIM-2E-LIU-01｜习题3.3｜PDF 183｜印刷页 160｜题号 3.3

---

## scut811-p1-q0101｜3.3｜transform_pair

**知识点：** kp-3.3 CTFS表示与系数

**题干：** CTFS系数仅有 \(a_1=-j/2\)、\(a_{-1}=j/2\) 时，对应哪一信号？

- A. \(\sin(\omega_0t)\) ✅
- B. \(\cos(\omega_0t)\) · `IGNORED_CONJUGATE_SYMMETRY`
- C. \(-\sin(\omega_0t)\) · `SIGN_ERROR`
- D. \(\sin(2\omega_0t)\) · `WRONG_HARMONIC_INDEX`

**解析：** 正确：正频率系数为 \(1/(2j)=-j/2\)，负频率系数为其相反。错项混淆正余弦、整体符号或谐波序号。易错点：先记正弦的正频率系数为负虚数。

**来源：** 基于重点习题3.3（谐波组合的基本频率及CTFS系数）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.3
- OPPENHEIM-2E-LIU-01｜习题3.3｜PDF 183｜印刷页 160｜题号 3.3

---

## scut811-p1-q0102｜3.3｜error_discrimination

**知识点：** kp-3.3 CTFS表示与系数

**题干：** 学生把CTFS综合式写成 \(x(t)=\sum_ka_ke^{jkf_0t}\)。漏掉了什么？

- A. 综合式还要乘 \(1/T_0\) · `WRONG_COEFFICIENT_NORMALIZATION`
- B. 角频率应为 \(\omega_0=2\pi f_0\) ✅
- C. 指数中应去掉 \(j\) · `SIGN_ERROR`
- D. 谐波下标 \(k\) 应放在系数分母 · `WRONG_HARMONIC_INDEX`

**解析：** 正确：若使用普通频率 \(f_0\)，指数应写 \(e^{j2\pi kf_0t}\)。错项改变复指数结构或重复归一化。易错点：分清Hz与rad/s。

**来源：** 基于重点习题3.3（谐波组合的基本频率及CTFS系数）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.3
- OPPENHEIM-2E-LIU-01｜习题3.3｜PDF 183｜印刷页 160｜题号 3.3

---

## scut811-p1-q0103｜3.3｜error_discrimination

**知识点：** kp-3.3 CTFS表示与系数

**题干：** 对实信号，学生只保留CTFS正频率系数并丢掉负频率项。会导致什么问题？

- A. 只会改变周期，不改变实值性 · `WRONG_PERIOD`
- B. 完全没有影响 · `IGNORED_CONJUGATE_SYMMETRY`
- C. 一般无法保持时域信号为实数 ✅
- D. 只会改变直流分量 · `WRONG_DC_COEFFICIENT`

**解析：** 正确：实信号需要 \(a_{-k}=a_k^*\) 的共轭成对结构。错项忽略负频率对实值性的作用。易错点：单个非零复指数通常对应复信号。

**来源：** 基于重点习题3.3（谐波组合的基本频率及CTFS系数）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.3
- OPPENHEIM-2E-LIU-01｜习题3.3｜PDF 183｜印刷页 160｜题号 3.3

---

## scut811-p1-q0104｜3.3｜error_discrimination

**知识点：** kp-3.3 CTFS表示与系数

**题干：** 求 \(a_k\) 时学生在两个周期长度的区间积分，却仍除以 \(T_0\)。结果会怎样？

- A. 所有系数缩小2倍 · `MISS_FACTOR_2`
- B. 只有 \(a_0\) 改变 · `WRONG_DC_COEFFICIENT`
- C. 结果完全不变 · `WRONG_COEFFICIENT_NORMALIZATION`
- D. 所有系数被放大2倍 ✅

**解析：** 正确：周期函数在两个周期上的积分是单周期的2倍，归一化若仍用 \(T_0\) 就整体翻倍。错项写反比例或只关注直流。易错点：积分长度和归一化长度必须匹配。

**来源：** 基于重点习题3.3（谐波组合的基本频率及CTFS系数）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.3
- OPPENHEIM-2E-LIU-01｜习题3.3｜PDF 183｜印刷页 160｜题号 3.3

---

## scut811-p1-q0105｜3.4｜concept

**知识点：** kp-3.4 傅里叶级数收敛

**题干：** 在狄利克雷条件下，傅里叶级数在信号连续点收敛到什么？

- A. 信号在该点的值 ✅
- B. 左右极限的差 · `IGNORED_CONVERGENCE_CONDITION`
- C. 恒为0 · `IGNORED_CONVERGENCE_CONDITION`
- D. 信号在该点的导数 · `WRONG_DIFFERENTIATION_FACTOR`

**解析：** 正确：连续点的左右极限相同，级数收敛到该共同值。错项混淆跳变点结论或导数。易错点：跳变点才取左右极限平均。

**来源：** 基于奥本海姆第二版第3.4节 傅里叶级数的收敛的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第3.4节 傅里叶级数的收敛｜PDF 146｜印刷页 123

---

## scut811-p1-q0106｜3.4｜concept

**知识点：** kp-3.4 傅里叶级数收敛

**题干：** 周期信号在跳变点 \(t_0\) 的傅里叶级数收敛到哪里？

- A. \(x(t_0^+)-x(t_0^-)\) · `SIGN_ERROR`
- B. \([x(t_0^-)+x(t_0^+)]/2\) ✅
- C. \(x(t_0^-)\) · `IGNORED_CONVERGENCE_CONDITION`
- D. \(x(t_0^+)\) · `IGNORED_CONVERGENCE_CONDITION`

**解析：** 正确：狄利克雷意义下在有限跳变处收敛到左右极限平均。错项任选一侧或取跳变量。易错点：这不代表原函数必须在跳变点定义为该平均值。

**来源：** 基于奥本海姆第二版第3.4节 傅里叶级数的收敛的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第3.4节 傅里叶级数的收敛｜PDF 146｜印刷页 123

---

## scut811-p1-q0107｜3.4｜error_discrimination

**知识点：** kp-3.4 傅里叶级数收敛

**题干：** 学生说“只要存在跳变，傅里叶级数就不收敛”。正确修正是什么？

- A. 跳变点收敛到右极限 · `IGNORED_CONVERGENCE_CONDITION`
- B. 只有连续信号才能有傅里叶级数 · `IGNORED_CONVERGENCE_CONDITION`
- C. 有限跳变允许收敛，跳变点收敛到左右极限平均 ✅
- D. 跳变点收敛到左极限 · `IGNORED_CONVERGENCE_CONDITION`

**解析：** 正确：分段连续且每周期有限个极值和跳变通常满足狄利克雷条件。错项把充分条件过度收紧。易错点：吉布斯现象不等于级数不收敛。

**来源：** 基于奥本海姆第二版第3.4节 傅里叶级数的收敛的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第3.4节 傅里叶级数的收敛｜PDF 146｜印刷页 123

---

## scut811-p1-q0108｜3.4｜error_discrimination

**知识点：** kp-3.4 傅里叶级数收敛

**题干：** 增加傅里叶级数项数后，跳变附近的吉布斯过冲会怎样？

- A. 峰值和宽度都立即变为0 · `IGNORED_CONVERGENCE_CONDITION`
- B. 过冲区域变宽且峰值无限增大 · `IGNORED_CONVERGENCE_CONDITION`
- C. 只要项数为偶数就完全消失 · `WRONG_HARMONIC_INDEX`
- D. 过冲区域变窄，但峰值相对跳变量不会趋于0 ✅

**解析：** 正确：增加谐波使振荡集中到更窄区域，但最大相对过冲保留。错项误认为有限截断能消除不连续影响。易错点：点态收敛与邻域内一致逼近不同。

**来源：** 基于奥本海姆第二版第3.4节 傅里叶级数的收敛的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第3.4节 傅里叶级数的收敛｜PDF 146｜印刷页 123

---

## scut811-p1-q0109｜3.5｜concept

**知识点：** kp-3.5 CTFS性质

**题干：** 实偶周期信号的CTFS系数具有什么典型性质？

- A. 系数为实数且关于 \(k\) 偶对称 ✅
- B. 系数为纯虚且奇对称 · `IGNORED_CONJUGATE_SYMMETRY`
- C. 只有正下标系数非零 · `IGNORED_CONJUGATE_SYMMETRY`
- D. 系数一定都相等 · `WRONG_COEFFICIENT_NORMALIZATION`

**解析：** 正确：实性给出共轭对称，偶性再使系数满足 \(a_{-k}=a_k\)，两者合成实偶。错项对应实奇或单边频谱误解。易错点：同时使用两条对称性质。

**来源：** 基于重点习题3.5（CTFS线性、时移、反转）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.5
- OPPENHEIM-2E-LIU-01｜习题3.5｜PDF 183｜印刷页 160｜题号 3.5

---

## scut811-p1-q0110｜3.5｜formula

**知识点：** kp-3.5 CTFS性质

**题干：** 若 \(x(t)\leftrightarrow a_k\)，则 \(x(t-t_0)\) 的CTFS系数是什么？

- A. \(a_k e^{-j\omega_0t_0}\) · `WRONG_HARMONIC_INDEX`
- B. \(a_ke^{-jk\omega_0t_0}\) ✅
- C. \(a_ke^{jk\omega_0t_0}\) · `SIGN_ERROR`
- D. \(a_{k-t_0}\) · `WRONG_HARMONIC_INDEX`

**解析：** 正确：第k次谐波延迟后产生相位 \(-k\omega_0t_0\)。错项写反符号、移动离散下标或漏k。易错点：每个谐波的相移随k成比例。

**来源：** 基于重点习题3.5（CTFS线性、时移、反转）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.5
- OPPENHEIM-2E-LIU-01｜习题3.5｜PDF 183｜印刷页 160｜题号 3.5

---

## scut811-p1-q0111｜3.5｜formula

**知识点：** kp-3.5 CTFS性质

**题干：** 若 \(x(t)\leftrightarrow a_k\)，则 \(dx(t)/dt\) 的CTFS系数是什么？

- A. \(a_k/(jk\omega_0)\) · `WRONG_DIFFERENTIATION_FACTOR`
- B. \(-jk\omega_0a_k\) · `SIGN_ERROR`
- C. \(jk\omega_0a_k\) ✅
- D. \(j\omega_0a_k\) · `WRONG_HARMONIC_INDEX`

**解析：** 正确：每一项 \(e^{jk\omega_0t}\) 微分产生 \(jk\omega_0\)。错项漏k、写成积分或符号错误。易错点：直流项k=0微分后消失。

**来源：** 基于重点习题3.8（实奇信号、有限谐波与Parseval）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.8
- OPPENHEIM-2E-LIU-01｜习题3.8｜PDF 183｜印刷页 160｜题号 3.8

---

## scut811-p1-q0112｜3.5｜formula

**知识点：** kp-3.5 CTFS性质

**题干：** CTFS的Parseval关系正确的是哪一个？

- A. \(\int_{T_0}|x(t)|^2dt=\sum|a_k|^2\) · `WRONG_PARSEVAL_FACTOR`
- B. \(\frac1{T_0}\int x(t)dt=\sum a_k\) · `FORGOT_MAGNITUDE_SQUARED`
- C. \(\frac1{2\pi}\int|x(t)|^2dt=\sum|a_k|\) · `WRONG_PARSEVAL_FACTOR`
- D. \(\frac1{T_0}\int_{T_0}|x(t)|^2dt=\sum_{k=-\infty}^{\infty}|a_k|^2\) ✅

**解析：** 正确：周期平均功率等于所有CTFS系数模平方之和。错项漏周期归一化、漏模平方或套用错误常数。易错点：左边是一个周期的平均功率。

**来源：** 基于重点习题3.26（由CTFS系数判定实性、奇偶性与导数性质）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.26
- OPPENHEIM-2E-LIU-01｜习题3.26｜PDF 186｜印刷页 163｜题号 3.26

---

## scut811-p1-q0113｜3.5｜formula

**知识点：** kp-3.5 CTFS性质

**题干：** 若 \(x(t)\leftrightarrow a_k\)，则时间反转 \(x(-t)\) 的系数是什么？

- A. \(a_{-k}\) ✅
- B. \(-a_k\) · `SIGN_ERROR`
- C. \(a_k^*\) · `IGNORED_CONJUGATE_SYMMETRY`
- D. \(a_{k-1}\) · `WRONG_HARMONIC_INDEX`

**解析：** 正确：将 \(t\) 换为 \(-t\) 会把指数谐波下标k换成-k。错项把反转误作取负、共轭或移位。易错点：只有对实信号才可进一步把 \(a_{-k}\) 写成 \(a_k^*\)。

**来源：** 基于重点习题3.40（时移、实部、偶部、微分及尺度的组合）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.40
- OPPENHEIM-2E-LIU-01｜习题3.40｜PDF 189｜印刷页 166｜题号 3.40

---

## scut811-p1-q0114｜3.5｜formula

**知识点：** kp-3.5 CTFS性质

**题干：** 若 \(x(t)\leftrightarrow a_k\)，则其共轭信号 \(x^*(t)\) 的CTFS系数是什么？

- A. \(-a_k^*\) · `SIGN_ERROR`
- B. \(a_{-k}^*\) ✅
- C. \(a_k^*\) · `IGNORED_CONJUGATE_SYMMETRY`
- D. \(a_{-k}\) · `IGNORED_CONJUGATE_SYMMETRY`

**解析：** 正确：对综合式取共轭会同时共轭系数并反转指数符号，整理后得到 \(a_{-k}^*\)。错项只完成一半操作。易错点：共轭会使 \(j\) 变号。

**来源：** 基于重点习题3.41（系数周期关系及偶对称约束下恢复周期信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.41
- OPPENHEIM-2E-LIU-01｜习题3.41｜PDF 189｜印刷页 166｜题号 3.41

---

## scut811-p1-q0115｜3.5｜transform_pair

**知识点：** kp-3.5 CTFS性质

**题干：** 若 \(x(t)\leftrightarrow a_k\)，其偶部 \(x_e(t)\) 对应哪组系数？

- A. \(a_k+a_{-k}\) · `MISS_FACTOR_2`
- B. \(a_k^*/2\) · `IGNORED_CONJUGATE_SYMMETRY`
- C. \((a_k+a_{-k})/2\) ✅
- D. \((a_k-a_{-k})/2\) · `SIGN_ERROR`

**解析：** 正确：偶部是 \([x(t)+x(-t)]/2\)，线性及反转性质给出系数平均。错项写成奇部、漏二分之一或只取共轭。易错点：先在时域写偶部定义。

**来源：** 基于重点习题3.5（CTFS线性、时移、反转）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.5
- OPPENHEIM-2E-LIU-01｜习题3.5｜PDF 183｜印刷页 160｜题号 3.5

---

## scut811-p1-q0116｜3.5｜transform_pair

**知识点：** kp-3.5 CTFS性质

**题干：** 若 \(x(t)\leftrightarrow a_k\)，则 \(x(t)e^{jm\omega_0t}\) 的CTFS系数是什么？

- A. \(a_{k+m}\) · `WRONG_SHIFT_DIRECTION`
- B. \(e^{jm\omega_0}a_k\) · `WRONG_HARMONIC_INDEX`
- C. \(ma_k\) · `MISS_SCALE_FACTOR`
- D. \(a_{k-m}\) ✅

**解析：** 正确：乘以第m次复指数把每个谐波上移m格，因此新第k格来自原第k-m格。错项写反下标方向或把调制当常数。易错点：用一个单一谐波代入可检查方向。

**来源：** 基于重点习题3.8（实奇信号、有限谐波与Parseval）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.8
- OPPENHEIM-2E-LIU-01｜习题3.8｜PDF 183｜印刷页 160｜题号 3.8

---

## scut811-p1-q0117｜3.5｜transform_pair

**知识点：** kp-3.5 CTFS性质

**题干：** 若 \(x(t)\leftrightarrow a_k\)，则 \(x(t)+x(-t)\) 的CTFS系数是什么？

- A. \(a_k+a_{-k}\) ✅
- B. \(a_k-a_{-k}\) · `SIGN_ERROR`
- C. \((a_k+a_{-k})/2\) · `MISS_FACTOR_2`
- D. \(2a_k\) · `IGNORED_CONJUGATE_SYMMETRY`

**解析：** 正确：线性与时间反转性质直接相加。错项写成差、误当偶部或假设原信号已偶对称。易错点：题目没有除以2，所以不是偶部本身。

**来源：** 基于重点习题3.26（由CTFS系数判定实性、奇偶性与导数性质）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.26
- OPPENHEIM-2E-LIU-01｜习题3.26｜PDF 186｜印刷页 163｜题号 3.26

---

## scut811-p1-q0118｜3.5｜error_discrimination

**知识点：** kp-3.5 CTFS性质

**题干：** 学生把 \(x(t-t_0)\) 的CTFS系数写成 \(a_ke^{-j\omega_0t_0}\)。漏掉了什么？

- A. 复共轭符号 · `IGNORED_CONJUGATE_SYMMETRY`
- B. 谐波下标 \(k\) ✅
- C. 绝对值符号 \(|t_0|\) · `MISSING_ABSOLUTE_VALUE`
- D. 周期归一化 \(1/T_0\) · `WRONG_COEFFICIENT_NORMALIZATION`

**解析：** 正确：第k次谐波的角频率是 \(k\omega_0\)，相移必须随k变化。错项加入无关因素。易错点：统一相位因子不能表示普通时移。

**来源：** 基于重点习题3.5（CTFS线性、时移、反转）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.5
- OPPENHEIM-2E-LIU-01｜习题3.5｜PDF 183｜印刷页 160｜题号 3.5

---

## scut811-p1-q0119｜3.5｜error_discrimination

**知识点：** kp-3.5 CTFS性质

**题干：** 实奇周期信号的CTFS系数被写成“实偶序列”。正确性质是什么？

- A. 纯虚且偶对称 · `SIGN_ERROR`
- B. 只有 \(a_0\) 非零 · `WRONG_DC_COEFFICIENT`
- C. 纯虚且关于 \(k\) 奇对称 ✅
- D. 实且奇对称 · `IGNORED_CONJUGATE_SYMMETRY`

**解析：** 正确：实性与奇性结合使系数为纯虚并满足 \(a_{-k}=-a_k\)。错项只使用了一半对称条件。易错点：实奇信号的直流系数为0。

**来源：** 基于重点习题3.8（实奇信号、有限谐波与Parseval）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.8
- OPPENHEIM-2E-LIU-01｜习题3.8｜PDF 183｜印刷页 160｜题号 3.8

---

## scut811-p1-q0120｜3.5｜error_discrimination

**知识点：** kp-3.5 CTFS性质

**题干：** 计算周期信号平均功率时，学生写成 \(\sum_ka_k^2\)。主要问题是什么？

- A. 还应对k再积分 · `CONFUSE_CT_DT`
- B. 应求 \(\sum_k|a_k|\) · `FORGOT_MAGNITUDE_SQUARED`
- C. 只保留 \(a_0^2\) · `WRONG_DC_COEFFICIENT`
- D. 应求 \(\sum_k|a_k|^2\) ✅

**解析：** 正确：复系数能量贡献由模平方给出。错项漏共轭、只取模或只取直流。易错点：即使时域信号实，CTFS系数也可能是复数。

**来源：** 基于重点习题3.26（由CTFS系数判定实性、奇偶性与导数性质）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.26
- OPPENHEIM-2E-LIU-01｜习题3.26｜PDF 186｜印刷页 163｜题号 3.26

---

## scut811-p1-q0121｜3.5｜error_discrimination

**知识点：** kp-3.5 CTFS性质

**题干：** 学生由 \(x(t)\leftrightarrow a_k\) 推出 \(x(-t)\leftrightarrow a_k^*\)。该式何时才可成立？

- A. 当 \(x(t)\) 为实信号时，因为此时 \(a_{-k}=a_k^*\) ✅
- B. 对任意复信号都成立 · `IGNORED_CONJUGATE_SYMMETRY`
- C. 仅当信号为奇信号 · `SIGN_ERROR`
- D. 仅当 \(a_0=0\) · `WRONG_DC_COEFFICIENT`

**解析：** 正确：一般反转对应 \(a_{-k}\)，实性才允许写成 \(a_k^*\)。错项把附加条件省略或换成无关条件。易错点：先写一般性质，再使用实信号约束。

**来源：** 基于重点习题3.40（时移、实部、偶部、微分及尺度的组合）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.40
- OPPENHEIM-2E-LIU-01｜习题3.40｜PDF 189｜印刷页 166｜题号 3.40

---

## scut811-p1-q0122｜3.5｜error_discrimination

**知识点：** kp-3.5 CTFS性质

**题干：** 对 \(dx/dt\) 的CTFS系数，学生写成 \(k\omega_0a_k\)。漏掉了什么？

- A. 共轭符号 · `IGNORED_CONJUGATE_SYMMETRY`
- B. 因子 \(j\) ✅
- C. 因子 \(2\pi\) · `MISSING_2PI`
- D. 绝对值 \(|k|\) · `MISSING_ABSOLUTE_VALUE`

**解析：** 正确：复指数微分产生 \(jk\omega_0\)。错项遗漏虚数单位或加入无关因素。易错点：微分会使相位领先 \(\pi/2\)。

**来源：** 基于重点习题3.41（系数周期关系及偶对称约束下恢复周期信号）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.41
- OPPENHEIM-2E-LIU-01｜习题3.41｜PDF 189｜印刷页 166｜题号 3.41

---

## scut811-p1-q0123｜3.6｜concept

**知识点：** kp-3.6 DTFS表示

**题干：** 周期为 \(N\) 的离散序列，其DTFS系数有多少个独立值？

- A. \(N-1\) 个 · `WRONG_COEFFICIENT_NORMALIZATION`
- B. \(2N\) 个 · `WRONG_MOD_N`
- C. \(N\) 个 ✅
- D. 无限多个且都独立 · `WRONG_MOD_N`

**解析：** 正确：系数序列以N为周期，因此任意连续N个系数决定全部系数。错项忽略模N周期或端点计数。易错点：综合求和通常只取一组N个连续下标。

**来源：** 基于重点习题3.10（DTFS系数周期性与共轭对称）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.10
- OPPENHEIM-2E-LIU-01｜习题3.10｜PDF 184｜印刷页 161｜题号 3.10

---

## scut811-p1-q0124｜3.6｜concept

**知识点：** kp-3.6 DTFS表示

**题干：** DTFS综合式中 \(e^{j(2\pi/N)kn}\) 的下标 \(k\) 增加N后会怎样？

- A. 基函数变号 · `WRONG_MOD_N`
- B. 频率增加 \(2\pi N\) · `WRONG_FREQUENCY_SCALE`
- C. 基函数变为0 · `WRONG_MOD_N`
- D. 基函数不变 ✅

**解析：** 正确：多出的因子为 \(e^{j2\pi n}=1\)。错项忽略整数n带来的周期等价。易错点：这正是系数按N周期的原因。

**来源：** 基于重点习题3.11（DTFS实偶性质与Parseval）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.11
- OPPENHEIM-2E-LIU-01｜习题3.11｜PDF 184｜印刷页 161｜题号 3.11

---

## scut811-p1-q0125｜3.6｜formula

**知识点：** kp-3.6 DTFS表示

**题干：** 周期为 \(N\) 的序列DTFS分析公式是哪一个？

- A. \(a_k=\frac1N\sum_{n=0}^{N-1}x[n]e^{-j(2\pi/N)kn}\) ✅
- B. \(a_k=\sum_{n=0}^{N-1}x[n]e^{j(2\pi/N)kn}\) · `SIGN_ERROR`
- C. \(a_k=\frac1{2\pi}\int x(t)e^{-jk\omega_0t}dt\) · `CONFUSE_CT_DT`
- D. \(a_k=\frac1N\sum|x[n]|^2\) · `FORGOT_MAGNITUDE_SQUARED`

**解析：** 正确：在任一N点周期上求和，带 \(1/N\) 和负指数核。错项漏归一化、写反符号或混用连续形式。易错点：分析式有 \(1/N\)，综合式没有。

**来源：** 基于重点习题3.10（DTFS系数周期性与共轭对称）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.10
- OPPENHEIM-2E-LIU-01｜习题3.10｜PDF 184｜印刷页 161｜题号 3.10

---

## scut811-p1-q0126｜3.6｜formula

**知识点：** kp-3.6 DTFS表示

**题干：** 周期为 \(N\) 的序列DTFS综合式是哪一个？

- A. \(x[n]=\int a_ke^{jkn}dk\) · `CONFUSE_CT_DT`
- B. \(x[n]=\sum_{k=0}^{N-1}a_ke^{j(2\pi/N)kn}\) ✅
- C. \(x[n]=\frac1N\sum_{k=0}^{N-1}a_ke^{j(2\pi/N)kn}\) · `WRONG_COEFFICIENT_NORMALIZATION`
- D. \(x[n]=\sum a_ke^{-j(2\pi/N)kn}\) · `SIGN_ERROR`

**解析：** 正确：采用当前系数定义时，综合式对一组N个系数求和且没有额外 \(1/N\)。错项重复归一化、写反符号或改成积分。易错点：不要把DFT的其他归一化约定混入。

**来源：** 基于重点习题3.11（DTFS实偶性质与Parseval）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.11
- OPPENHEIM-2E-LIU-01｜习题3.11｜PDF 184｜印刷页 161｜题号 3.11

---

## scut811-p1-q0127｜3.6｜transform_pair

**知识点：** kp-3.6 DTFS表示

**题干：** 周期N序列 \(x[n]=1\) 的DTFS系数是哪一组？

- A. \(a_1=1\)，其余为0 · `WRONG_HARMONIC_INDEX`
- B. \(a_0=1/N\) · `WRONG_COEFFICIENT_NORMALIZATION`
- C. \(a_0=1\)，其余独立系数为0 ✅
- D. 所有 \(a_k=1\) · `WRONG_DC_COEFFICIENT`

**解析：** 正确：常数序列只有直流分量。错项把常数分散到所有频率、错放到基波或重复除N。易错点：综合式中的直流系数直接等于常数。

**来源：** 基于重点习题3.10（DTFS系数周期性与共轭对称）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.10
- OPPENHEIM-2E-LIU-01｜习题3.10｜PDF 184｜印刷页 161｜题号 3.10

---

## scut811-p1-q0128｜3.6｜transform_pair

**知识点：** kp-3.6 DTFS表示

**题干：** 周期N序列 \(x[n]=e^{j(2\pi/N)mn}\) 的DTFS系数是什么？

- A. 当 \(k=m\) 时 \(a_k=1/N\) · `WRONG_COEFFICIENT_NORMALIZATION`
- B. 当 \(k\equiv-m\pmod N\) 时为1 · `SIGN_ERROR`
- C. 所有 \(a_k=e^{j2\pi m/N}\) · `WRONG_MOD_N`
- D. 当 \(k\equiv m\pmod N\) 时 \(a_k=1\)，其余为0 ✅

**解析：** 正确：输入本身就是第m个DTFS基函数，系数按N周期重复。错项多除N、写反下标或忽略正交性。易错点：下标判断要按模N。

**来源：** 基于重点习题3.11（DTFS实偶性质与Parseval）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.11
- OPPENHEIM-2E-LIU-01｜习题3.11｜PDF 184｜印刷页 161｜题号 3.11

---

## scut811-p1-q0129｜3.6｜transform_pair

**知识点：** kp-3.6 DTFS表示

**题干：** 周期N冲激列在每周期仅 \(n=0\) 处为1，其DTFS系数是什么？

- A. 对所有 \(k\)，\(a_k=1/N\) ✅
- B. 仅 \(a_0=1\) · `WRONG_DC_COEFFICIENT`
- C. 对所有 \(k\)，\(a_k=1\) · `WRONG_COEFFICIENT_NORMALIZATION`
- D. 对所有 \(k\)，\(a_k=N\) · `WRONG_COEFFICIENT_NORMALIZATION`

**解析：** 正确：分析和每周期只有一个非零样本，除以N后每个k都为1/N。错项把时域冲激误作频域冲激或漏归一化。易错点：时域越集中，DTFS系数越均匀。

**来源：** 基于重点习题3.10（DTFS系数周期性与共轭对称）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.10
- OPPENHEIM-2E-LIU-01｜习题3.10｜PDF 184｜印刷页 161｜题号 3.10

---

## scut811-p1-q0130｜3.6｜transform_pair

**知识点：** kp-3.6 DTFS表示

**题干：** 对周期为 \(N\) 的实余弦 \(\cos(2\pi mn/N)\)，且 \(m\not\equiv -m\pmod N\)（即 \(m\neq0\)，并且当 \(N\) 为偶数时 \(m\neq N/2\)），非零DTFS系数是哪组？

- A. \(a_m=-a_{-m}=1/2\) · `SIGN_ERROR`
- B. \(a_m=a_{-m}=1/2\)（下标按N取模） ✅
- C. \(a_m=1\)，其余为0 · `MISS_FACTOR_2`
- D. \(a_m=a_{N-m}=1\) · `MISS_FACTOR_2`

**解析：** 正确：余弦分成正负两个复指数，每个系数1/2，负下标按N等价。错项漏二分之一或误作正弦符号结构。易错点：\(-m\) 与 \(N-m\) 是同一系数格。

**来源：** 基于重点习题3.11（DTFS实偶性质与Parseval）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.11
- OPPENHEIM-2E-LIU-01｜习题3.11｜PDF 184｜印刷页 161｜题号 3.11

---

## scut811-p1-q0131｜3.6｜error_discrimination

**知识点：** kp-3.6 DTFS表示

**题干：** 学生把DTFS分析式前的 \(1/N\) 写成 \(1/T_0\)。问题是什么？

- A. DTFS不需要任何归一化 · `WRONG_COEFFICIENT_NORMALIZATION`
- B. 应写成 \(1/N^2\) · `WRONG_COEFFICIENT_NORMALIZATION`
- C. 混淆离散周期点数N与连续时间周期 ✅
- D. 只需再乘 \(2\pi\) · `MISSING_2PI`

**解析：** 正确：DTFS在一个周期的N个样本上求和，归一化因子是1/N。错项套用CTFS或错误取消归一化。易错点：连续积分用T，离散求和用N。

**来源：** 基于重点习题3.10（DTFS系数周期性与共轭对称）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.10
- OPPENHEIM-2E-LIU-01｜习题3.10｜PDF 184｜印刷页 161｜题号 3.10

---

## scut811-p1-q0132｜3.6｜error_discrimination

**知识点：** kp-3.6 DTFS表示

**题干：** 周期N序列的系数 \(a_{N+2}\) 被当作一个全新的独立系数。正确处理是什么？

- A. \(a_{N+2}=0\) · `WRONG_MOD_N`
- B. \(a_{N+2}=a_{-2}\) · `SIGN_ERROR`
- C. \(a_{N+2}=Na_2\) · `WRONG_COEFFICIENT_NORMALIZATION`
- D. \(a_{N+2}=a_2\) ✅

**解析：** 正确：DTFS系数以N为周期。错项把超出基本区间当零、写反下标或错误缩放。易错点：所有系数下标先按N化简。

**来源：** 基于重点习题3.11（DTFS实偶性质与Parseval）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.11
- OPPENHEIM-2E-LIU-01｜习题3.11｜PDF 184｜印刷页 161｜题号 3.11

---

## scut811-p1-q0133｜3.7｜formula

**知识点：** kp-3.7 DTFS性质

**题干：** 周期N序列的DTFS Parseval关系是哪一个？

- A. \(\frac1N\sum_{n=0}^{N-1}|x[n]|^2=\sum_{k=0}^{N-1}|a_k|^2\) ✅
- B. \(\sum|x[n]|^2=\sum|a_k|^2\) · `WRONG_PARSEVAL_FACTOR`
- C. \(\frac1N\sum x[n]=\sum a_k\) · `FORGOT_MAGNITUDE_SQUARED`
- D. \(\sum|x[n]|^2=\frac1{N^2}\sum|a_k|^2\) · `WRONG_PARSEVAL_FACTOR`

**解析：** 正确：采用分析式含1/N、综合式不含归一化时，时域平均功率等于系数模平方和。错项漏模平方或使用错误N因子。易错点：先确认项目采用的DTFS归一化约定。

**来源：** 基于重点习题3.50（DTFS系数下标关系与序列约束）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.50
- OPPENHEIM-2E-LIU-01｜习题3.50｜PDF 192｜印刷页 169｜题号 3.50

---

## scut811-p1-q0134｜3.7｜error_discrimination

**知识点：** kp-3.7 DTFS性质

**题干：** 实周期序列满足 \(a_2=1+j\)。学生写 \(a_{-2}=1+j\)。正确值是什么？

- A. \(0\) · `WRONG_MOD_N`
- B. \(1-j\) ✅
- C. \(-1-j\) · `SIGN_ERROR`
- D. \(-1+j\) · `IGNORED_CONJUGATE_SYMMETRY`

**解析：** 正确：实序列系数满足 \(a_{-k}=a_k^*\)，所以只改变虚部符号。错项整体取负、共轭错误或当成不存在。易错点：共轭不是相反数。

**来源：** 基于重点习题3.50（DTFS系数下标关系与序列约束）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.50
- OPPENHEIM-2E-LIU-01｜习题3.50｜PDF 192｜印刷页 169｜题号 3.50

---

## scut811-p1-q0135｜3.7｜error_discrimination

**知识点：** kp-3.7 DTFS性质

**题干：** 周期 \(N=8\) 时，学生认为 \(a_{-1}\) 与基本区间内任何系数都无关。正确等价下标是什么？

- A. \(a_{-1}=a_8\) · `WRONG_MOD_N`
- B. \(a_{-1}=0\) · `WRONG_MOD_N`
- C. \(a_{-1}=a_7\) ✅
- D. \(a_{-1}=a_1\) · `WRONG_MOD_N`

**解析：** 正确：\(-1\equiv7\pmod8\)。错项忽略模N或把边界8误作-1。易错点：基本区间0到N-1中，负一下标对应N-1。

**来源：** 基于重点习题3.51（DTFS时移、周期门控与系数关系）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.51
- OPPENHEIM-2E-LIU-01｜习题3.51｜PDF 192｜印刷页 169｜题号 3.51

---

## scut811-p1-q0136｜3.8｜concept

**知识点：** kp-3.8 FS与LTI系统

**题干：** 周期信号通过LTI系统后仍以相同基本周期表示的关键原因是什么？

- A. 系统把所有谐波变成直流 · `WRONG_HARMONIC_INDEX`
- B. LTI系统会把频率统一缩放 · `INVALID_TIME_SCALING_FOR_LTI`
- C. 只有非因果系统才能保持周期 · `CAUSALITY_ERROR`
- D. 每个谐波分别乘以对应频率响应，不产生新频率 ✅

**解析：** 正确：复指数特征函数性质使每个输入谐波保留原频率。错项错误引入新频率或因果条件。易错点：某些谐波可被抑制，但不会凭空产生非线性谐波。

**来源：** 基于重点习题3.13（周期输入经LTI系统的谐波响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.13
- OPPENHEIM-2E-LIU-01｜习题3.13｜PDF 184｜印刷页 161｜题号 3.13

---

## scut811-p1-q0137｜3.8｜formula

**知识点：** kp-3.8 FS与LTI系统

**题干：** 已知周期输入的CTFS系数 \(a_2=3\)，LTI系统在二次谐波处满足 \(H(j2\omega_0)=-j\)，输出系数 \(b_2\) 是多少？

- A. \(-3j\) ✅
- B. \(3j\) · `SIGN_ERROR`
- C. \(-j\) · `MISS_SCALE_FACTOR`
- D. \(-6j\) · `MISS_FACTOR_2`

**解析：** 正确：\(b_2=a_2H(j2\omega_0)=3(-j)=-3j\)。错项分别写反符号、漏乘输入系数或多乘2。易错点：第 \(k\) 次谐波应在 \(k\omega_0\) 处取系统响应。

**来源：** 基于重点习题3.13（周期输入经LTI系统的谐波响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.13
- OPPENHEIM-2E-LIU-01｜习题3.13｜PDF 184｜印刷页 161｜题号 3.13

---

## scut811-p1-q0138｜3.8｜formula

**知识点：** kp-3.8 FS与LTI系统

**题干：** 输入 \(x(t)=A\cos(\omega_1t+\phi)\) 通过LTI系统，输出稳态幅度是多少？

- A. \(A|H(j\omega_0)|\) · `WRONG_HARMONIC_INDEX`
- B. \(A|H(j\omega_1)|\) ✅
- C. \(A\angle H(j\omega_1)\) · `WRONG_FREQUENCY_SCALE`
- D. \(|A+H(j\omega_1)|\) · `LINEARITY_ERROR`

**解析：** 正确：正弦稳态幅度乘频率响应模值。错项把相角当增益、做加法或在错误频率取值。易错点：相位另加 \(\angle H(j\omega_1)\)。

**来源：** 基于重点习题3.13（周期输入经LTI系统的谐波响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.13
- OPPENHEIM-2E-LIU-01｜习题3.13｜PDF 184｜印刷页 161｜题号 3.13

---

## scut811-p1-q0139｜3.8｜transform_pair

**知识点：** kp-3.8 FS与LTI系统

**题干：** 若输入CTFS只有 \(a_{\pm1}=1/2\)，系统满足 \(H(\pm j\omega_0)=0\)，输出是什么？

- A. \(y(t)=1\) · `WRONG_DC_COEFFICIENT`
- B. \(y(t)=\sin\omega_0t\) · `SIGN_ERROR`
- C. \(y(t)=0\) ✅
- D. \(y(t)=\cos\omega_0t\) · `WRONG_FILTER_PASSBAND`

**解析：** 正确：输入仅有的两个谐波都落在系统零点上，因此输出系数全为0。错项忽略滤波作用或凭空产生直流/正弦。易错点：先列非零输入谐波，再逐个乘H。

**来源：** 基于重点习题3.13（周期输入经LTI系统的谐波响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.13
- OPPENHEIM-2E-LIU-01｜习题3.13｜PDF 184｜印刷页 161｜题号 3.13

---

## scut811-p1-q0140｜3.8｜transform_pair

**知识点：** kp-3.8 FS与LTI系统

**题干：** 输入含直流和二次谐波，\(a_0=2,a_{\pm2}=1\)。若系统只通过直流，输出是什么？

- A. \(y(t)=2\cos(2\omega_0t)\) · `WRONG_FILTER_PASSBAND`
- B. \(y(t)=H(j2\omega_0)\) · `WRONG_HARMONIC_INDEX`
- C. \(y(t)=2\) · `MISS_SCALE_FACTOR`
- D. \(y(t)=2H(0)\) ✅

**解析：** 正确：只有k=0项保留，输出直流系数是 \(a_0H(0)\)。错项保留被阻断谐波、取错频率或默认直流增益为1。易错点：直流对应 \(H(0)\)。

**来源：** 基于重点习题3.13（周期输入经LTI系统的谐波响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.13
- OPPENHEIM-2E-LIU-01｜习题3.13｜PDF 184｜印刷页 161｜题号 3.13

---

## scut811-p1-q0141｜3.8｜error_discrimination

**知识点：** kp-3.8 FS与LTI系统

**题干：** 学生计算第3次谐波输出时使用 \(H(j\omega_0)\)。应改用什么？

- A. \(H(j3\omega_0)\) ✅
- B. \(H(j\omega_0/3)\) · `WRONG_FREQUENCY_SCALE`
- C. \(H(j3)\) · `WRONG_FREQUENCY_SCALE`
- D. \(3H(j\omega_0)\) · `MISS_SCALE_FACTOR`

**解析：** 正确：第3次谐波角频率为 \(3\omega_0\)。错项做反向缩放、漏单位或把频率缩放当增益。易错点：谐波序号进入H的自变量。

**来源：** 基于重点习题3.13（周期输入经LTI系统的谐波响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.13
- OPPENHEIM-2E-LIU-01｜习题3.13｜PDF 184｜印刷页 161｜题号 3.13

---

## scut811-p1-q0142｜3.8｜error_discrimination

**知识点：** kp-3.8 FS与LTI系统

**题干：** 理想低通截止频率 \(1.5\omega_0\)，输入含k=0、±1、±2谐波。哪些能通过？

- A. 只有 \(k=0\) · `WRONG_FILTER_PASSBAND`
- B. \(k=0,\pm1\) ✅
- C. 只有 \(k=\pm2\) · `WRONG_FILTER_PASSBAND`
- D. 全部通过 · `WRONG_FILTER_PASSBAND`

**解析：** 正确：通过条件为 \(|k\omega_0|\le1.5\omega_0\)，所以只有0和±1。错项误判通带边界或谐波频率。易错点：比较的是 \(|k\omega_0|\)，不是k与截止频率直接比较。

**来源：** 基于重点习题3.13（周期输入经LTI系统的谐波响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.13
- OPPENHEIM-2E-LIU-01｜习题3.13｜PDF 184｜印刷页 161｜题号 3.13

---

## scut811-p1-q0143｜3.8｜error_discrimination

**知识点：** kp-3.8 FS与LTI系统

**题干：** 实周期输入通过实LTI系统后，学生只计算正k输出系数。还必须做什么？

- A. 把所有系数乘2 · `MISS_FACTOR_2`
- B. 负k系数一律为0 · `IGNORED_CONJUGATE_SYMMETRY`
- C. 用共轭对称补出负k系数 ✅
- D. 把正k系数全部取负 · `SIGN_ERROR`

**解析：** 正确：实输出要求 \(b_{-k}=b_k^*\)，负频率项不能丢。错项错误取负、翻倍或置零。易错点：若系统冲激响应实，H也具有相应共轭对称。

**来源：** 基于重点习题3.13（周期输入经LTI系统的谐波响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.13
- OPPENHEIM-2E-LIU-01｜习题3.13｜PDF 184｜印刷页 161｜题号 3.13

---

## scut811-p1-q0144｜3.9-3.11｜formula

**知识点：** kp-3.9-3.11 滤波与方程描述滤波器

**题干：** 理想连续时间低通滤波器的基本频率响应可写成哪一个？

- A. \(H=0\) 当 \(|\omega|\le\omega_c\)，否则为1 · `WRONG_FILTER_PASSBAND`
- B. \(H=1\) 当 \(t\le\omega_c\) · `CONFUSE_CT_DT`
- C. \(H=j\omega\) 对所有频率 · `WRONG_FILTER_PASSBAND`
- D. \(H(j\omega)=1\) 当 \(|\omega|\le\omega_c\)，否则为0 ✅

**解析：** 正确：理想低通在截止频率以内单位通过、以外完全阻断。错项交换通阻带或混淆时间变量。易错点：通带条件使用 \(|\omega|\)。

**来源：** 基于重点习题3.15（理想低通滤波与谐波筛选）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.15
- OPPENHEIM-2E-LIU-01｜习题3.15｜PDF 184｜印刷页 161｜题号 3.15

---

## scut811-p1-q0145｜3.9-3.11｜error_discrimination

**知识点：** kp-3.9-3.11 滤波与方程描述滤波器

**题干：** 高通滤波器截止频率为 \(2\omega_0\)。输入仅含k=1和k=3谐波，哪项正确？

- A. k=3通过，k=1被抑制 ✅
- B. k=1通过，k=3被抑制 · `WRONG_FILTER_PASSBAND`
- C. 两者都通过 · `WRONG_FILTER_PASSBAND`
- D. 两者都被抑制 · `WRONG_FILTER_PASSBAND`

**解析：** 正确：高通保留绝对频率高于截止的分量，\(3\omega_0\) 在通带，\(\omega_0\) 不在。错项交换通阻带或忽略频率。易错点：高通判断也要看绝对频率。

**来源：** 基于重点习题3.15（理想低通滤波与谐波筛选）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.15
- OPPENHEIM-2E-LIU-01｜习题3.15｜PDF 184｜印刷页 161｜题号 3.15

---

## scut811-p1-q0146｜3.9-3.11｜error_discrimination

**知识点：** kp-3.9-3.11 滤波与方程描述滤波器

**题干：** RC低通系统 \(y^{\prime}(t)+ay(t)=ax(t)\) 的直流增益是多少（\(a>0\)）？

- A. \(H(0)=1/a\) · `MISS_SCALE_FACTOR`
- B. \(H(0)=1\) ✅
- C. \(H(0)=0\) · `WRONG_FILTER_PASSBAND`
- D. \(H(0)=a\) · `MISS_SCALE_FACTOR`

**解析：** 正确：\(H(j\omega)=a/(j\omega+a)\)，代入0得1。错项忽略分子或只取单个系数。易错点：低通在直流处应通过。

**来源：** 基于重点习题3.35（理想高通与可通过的谐波）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.35
- OPPENHEIM-2E-LIU-01｜习题3.35｜PDF 188｜印刷页 165｜题号 3.35

---

## scut811-p1-q0147｜3.9-3.11｜error_discrimination

**知识点：** kp-3.9-3.11 滤波与方程描述滤波器

**题干：** 系统 \(y^{\prime}(t)+ay(t)=x^{\prime}(t)\)（\(a>0\)）被称作低通。正确辨析是什么？

- A. 它对所有频率增益都为1 · `WRONG_FILTER_PASSBAND`
- B. 它不是LTI系统 · `LINEARITY_ERROR`
- C. 它在直流处增益为0，更符合高通特征 ✅
- D. 只要含一阶微分就是低通 · `WRONG_FILTER_PASSBAND`

**解析：** 正确：\(H=j\omega/(j\omega+a)\)，直流被阻断，高频趋近1。错项只看方程阶数或误判线性。易错点：判断滤波类型优先看 \(H(0)\) 与高频极限。

**来源：** 基于重点习题3.15（理想低通滤波与谐波筛选）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.15
- OPPENHEIM-2E-LIU-01｜习题3.15｜PDF 184｜印刷页 161｜题号 3.15

---

## scut811-p1-q0148｜3.9-3.11｜error_discrimination

**知识点：** kp-3.9-3.11 滤波与方程描述滤波器

**题干：** 离散滤波器 \(y[n]=x[n]+x[n-1]\) 对 \(\Omega=\pi\) 的增益是多少？

- A. \(2\) · `WRONG_FILTER_PASSBAND`
- B. \(1\) · `MISS_FACTOR_2`
- C. \(-2\) · `SIGN_ERROR`
- D. \(H(e^{j\pi})=0\) ✅

**解析：** 正确：\(H=1+e^{-j\Omega}\)，在 \(\Omega=\pi\) 时两项抵消。错项忽略相位或只做幅度相加。易错点：延迟项在不同频率可能相长或相消。

**来源：** 基于重点习题3.35（理想高通与可通过的谐波）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.35
- OPPENHEIM-2E-LIU-01｜习题3.35｜PDF 188｜印刷页 165｜题号 3.35

---

## scut811-p1-q0149｜3.9-3.11｜error_discrimination

**知识点：** kp-3.9-3.11 滤波与方程描述滤波器

**题干：** 离散滤波器 \(y[n]=x[n]-x[n-1]\) 对直流输入的输出是什么？

- A. 0 ✅
- B. 等于输入本身 · `WRONG_FILTER_PASSBAND`
- C. 等于输入的2倍 · `MISS_FACTOR_2`
- D. 随n线性增长 · `FORGOT_INTEGRATION`

**解析：** 正确：常数序列相邻样本相等，一阶差分为0。错项忽略相减或误作累加器。易错点：一阶差分器抑制直流。

**来源：** 基于重点习题3.15（理想低通滤波与谐波筛选）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题列表｜PDF 4｜印刷页 —｜题号 3.15
- OPPENHEIM-2E-LIU-01｜习题3.15｜PDF 184｜印刷页 161｜题号 3.15

---

## scut811-p1-sample-008｜3.3｜concept

**知识点：** kp-3.3 CTFS表示与系数

**题干：** 周期为 \(T_0\) 的连续时间周期信号，其基波频率 \(f_0\) 与基波角频率 \(\omega_0\) 的关系正确的是哪一个？

- A. \(f_0=\frac{2\pi}{T_0},\ \omega_0=\frac1{T_0}\) · `WRONG_FREQUENCY_SCALE`
- B. \(\omega_0=\frac{f_0}{2\pi}\) · `MISSING_2PI`
- C. \(f_0=\omega_0=\frac1{T_0}\) · `MISSING_2PI`
- D. \(f_0=\frac1{T_0},\ \omega_0=2\pi f_0=\frac{2\pi}{T_0}\) ✅

**解析：** 正确：普通频率以周/秒计，\(f_0=1/T_0\)；角频率多出每周 \(2\pi\) 弧度，因此 \(\omega_0=2\pi f_0\)。错误项都在交换或漏掉 \(2\pi\)。易错点：指数型CTFS写的是 \(e^{jk\omega_0t}\)。

**来源：** 重点习题3.3的基波频率和CTFS系数模型，拆出f0与omega0辨析。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题清单｜PDF 4｜印刷页 —｜题号 3.3
- OPPENHEIM-2E-LIU-01｜第3章习题3.3｜PDF 183｜印刷页 160｜题号 3.3

---

## scut811-p1-sample-009｜3.3｜transform_pair

**知识点：** kp-3.3 CTFS表示与系数

**题干：** 若 \(x(t)=\cos(3\omega_0t)\)，在 \(x(t)=\sum_{k=-\infty}^{\infty}a_ke^{jk\omega_0t}\) 中，非零系数是哪一组？

- A. \(a_3=a_{-3}=\frac12\) ✅
- B. \(a_3=1\)，其余为0 · `WRONG_HARMONIC_INDEX`
- C. \(a_{-3}=1\)，其余为0 · `SIGN_ERROR`
- D. \(a_1=a_{-1}=\frac12\) · `WRONG_HARMONIC_INDEX`

**解析：** 正确：欧拉公式给出 \(\cos(3\omega_0t)=\tfrac12e^{j3\omega_0t}+\tfrac12e^{-j3\omega_0t}\)。错误项漏掉负频率项、漏掉二分之一或把谐波下标写成1。易错点：下标由角频率与 \(\omega_0\) 的倍数决定。

**来源：** 重点习题3.3的谐波组合与指数型CTFS系数模型，控制数值后改写。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题清单｜PDF 4｜印刷页 —｜题号 3.3
- OPPENHEIM-2E-LIU-01｜第3章习题3.3｜PDF 183｜印刷页 160｜题号 3.3

---

## scut811-p1-sample-010｜3.7｜error_discrimination

**知识点：** kp-3.7 DTFS性质

**题干：** 实序列 \(x[n]\) 的周期为 \(N=7\)，DTFS系数为 \(a_k\)。若 \(a_{16}=2j\)，则 \(a_{-2}\) 是多少？

- A. \(2j\) · `SIGN_ERROR`
- B. \(-3j\) · `WRONG_MOD_N`
- C. \(-2j\) ✅
- D. \(0\) · `WRONG_MOD_N`

**解析：** 正确：DTFS系数按 \(N\) 周期，\(16\equiv2\pmod7\)，故 \(a_2=2j\)；实序列满足 \(a_{-2}=a_2^*=-2j\)。错误项忘记共轭、取错模下标或把负下标当成不存在。易错点：先模 \(N\)，再用共轭对称。

**来源：** 重点习题3.10的DTFS系数周期性与实序列共轭对称，保留N=7并缩成一步判断。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题清单｜PDF 4｜印刷页 —｜题号 3.10
- OPPENHEIM-2E-LIU-01｜第3章习题3.10｜PDF 184｜印刷页 161｜题号 3.10

---

## scut811-p1-sample-011｜3.8｜formula

**知识点：** kp-3.8 FS与LTI系统

**题干：** 周期输入 \(x(t)=\sum_{k=-\infty}^{\infty}a_ke^{jk\omega_0t}\) 通过频率响应为 \(H(j\omega)\) 的连续时间LTI系统。输出CTFS系数 \(b_k\) 是什么？

- A. \(b_k=a_kH(j\omega_0)\) · `WRONG_HARMONIC_INDEX`
- B. \(b_k=a_kH(jk\omega_0)\) ✅
- C. \(b_k=a_kH(j\omega)\) · `WRONG_HARMONIC_INDEX`
- D. \(b_k=a_kH(jk)\) · `WRONG_FREQUENCY_SCALE`

**解析：** 正确：第 \(k\) 个谐波的角频率是 \(k\omega_0\)，复指数通过LTI系统时乘以该频率处的响应。错误项漏掉谐波下标、保留自由变量 \(\omega\)，或漏掉 \(\omega_0\)。易错点：应代入 \(H(jk\omega_0)\)，不是统一代入 \(H(j\omega_0)\)。

**来源：** 重点习题3.13的周期输入经LTI系统谐波响应模型，抽取核心公式。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第3章重点课后题清单｜PDF 4｜印刷页 —｜题号 3.13
- OPPENHEIM-2E-LIU-01｜第3章习题3.13｜PDF 184｜印刷页 161｜题号 3.13

---
