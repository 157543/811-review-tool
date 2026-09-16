# 第5章人工审题（80题）

> 当前状态：reviewed=80。内容审核门槛：正确答案正确、题干无实质歧义、无明显错误知识、无严重重复或低价值题。来源和 machine error tag 的精细问题不阻塞 reviewed，但 verified 仍须最终核验。

## scut811-p1-q0230｜5.1｜concept

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** DTFT \(X(e^{j\omega})\) 关于 \(\omega\) 的基本周期是多少？

- A. 它通常不周期 · `CONFUSE_CT_DT`
- B. \(2\pi\) ✅
- C. \(\pi\) · `WRONG_PERIOD`
- D. 序列长度N · `WRONG_MOD_N`

**解析：** 正确：指数核对 \(\omega+2\pi\) 不变，所以DTFT以 \(2\pi\) 为周期。错项混淆半周期、DTFS模N或CTFT。易错点：任何离散时间序列的DTFT都具有此周期性。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0231｜5.1｜concept

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** 序列绝对可和 \(\sum_n|x[n]|<\infty\) 对DTFT意味着什么？

- A. 它说明序列一定周期 · `WRONG_PERIOD`
- B. 它说明序列能量必为无穷 · `CONFUSE_ENERGY_POWER`
- C. 它是DTFT一致存在的一个充分条件 ✅
- D. 它是DTFT存在的必要条件 · `IGNORED_CONVERGENCE_CONDITION`

**解析：** 正确：绝对可和保证DTFT收敛，但广义意义下还有其他序列。错项把充分条件说成必要或混淆周期、能量。易错点：常数序列需冲激列形式的广义DTFT。

**来源：** 基于重点习题5.9（由虚部、单边性与Parseval恢复序列）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.9
- OPPENHEIM-2E-LIU-01｜习题5.9｜PDF 280｜印刷页 257｜题号 5.9

---

## scut811-p1-q0232｜5.1｜formula

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** DTFT分析公式是哪一个？

- A. \(X(j\omega)=\int x(t)e^{-j\omega t}dt\) · `CONFUSE_CT_DT`
- B. \(X(e^{j\omega})=\sum_nx[n]e^{j\omega n}\) · `SIGN_ERROR`
- C. \(X[k]=\frac1N\sum_nx[n]e^{-jk\omega_0n}\) · `CONFUSE_CT_DT`
- D. \(X(e^{j\omega})=\sum_{n=-\infty}^{\infty}x[n]e^{-j\omega n}\) ✅

**解析：** 正确：DTFT对整数n求和并使用负指数核。错项混入CTFT、写反符号或混入DTFS。易错点：DTFT频率连续但频谱周期。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0233｜5.1｜formula

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** DTFT合成公式是哪一个？

- A. \(x[n]=\frac1{2\pi}\int_{-\pi}^{\pi}X(e^{j\omega})e^{j\omega n}d\omega\) ✅
- B. \(x[n]=\int_{-\infty}^{\infty}X(e^{j\omega})e^{-j\omega n}d\omega\) · `SIGN_ERROR`
- C. \(x[n]=\frac1N\sum_kX[k]e^{jk\omega_0n}\) · `CONFUSE_CT_DT`
- D. \(x[n]=2\pi\int_{-\pi}^{\pi}X(e^{j\omega})e^{j\omega n}d\omega\) · `MISSING_2PI`

**解析：** 正确：在任意长为 \(2\pi\) 的区间积分，并带 \(1/2\pi\) 与正指数核。错项混淆DTFS或归一化。易错点：积分区间不必固定为 \([-\pi,\pi]\)，长度正确即可。

**来源：** 基于重点习题5.9（由虚部、单边性与Parseval恢复序列）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.9
- OPPENHEIM-2E-LIU-01｜习题5.9｜PDF 280｜印刷页 257｜题号 5.9

---

## scut811-p1-q0234｜5.1｜formula

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** 对 \(x[n]=(-a)^n u[n]\)，\(|a|<1\)，其DTFT是什么？

- A. \(1/(1-ae^{-j\omega})\) · `SIGN_ERROR`
- B. \(1/(1+ae^{-j\omega})\) ✅
- C. \(1/(1+ae^{j\omega})\) · `SIGN_ERROR`
- D. \(1/(a+e^{-j\omega})\) · `WRONG_COEFFICIENT_NORMALIZATION`

**解析：** 正确：几何级数的公比为 \(-ae^{-j\omega}\)，故和为 \(1/(1+ae^{-j\omega})\)。错项漏负号、写反频率指数或交换常数位置。易错点：底数中的负号会把分母的减号变成加号。

**来源：** 基于重点习题5.23（由波形求频谱取值、积分、实部及Parseval量）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.23
- OPPENHEIM-2E-LIU-01｜习题5.23｜PDF 282｜印刷页 259｜题号 5.23

---

## scut811-p1-q0235｜5.1｜transform_pair

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** 下列哪一项是正确DTFT变换对？

- A. \(1\leftrightarrow1\) · `WRONG_PERIOD`
- B. \(u[n]\leftrightarrow1\) · `CONFUSE_IMPULSE_STEP`
- C. \(\delta[n]\leftrightarrow1\) ✅
- D. \(\delta[n]\leftrightarrow2\pi\delta(\omega)\) · `CONFUSE_CT_DT`

**解析：** 正确：单位样值只保留n=0项，DTFT为1。错项混入CTFT冲激或阶跃。易错点：频域表达仍按 \(2\pi\) 周期理解。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0236｜5.1｜transform_pair

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** 移位单位样值 \(\delta[n-n_0]\) 的DTFT是什么？

- A. \(e^{j\omega n_0}\) · `WRONG_SHIFT_DIRECTION`
- B. \(2\pi\delta(\omega-n_0)\) · `CONFUSE_CT_DT`
- C. \(e^{-jn\omega_0}\) · `WRONG_FREQUENCY_SCALE`
- D. \(e^{-j\omega n_0}\) ✅

**解析：** 正确：求和的抽样性质直接得到 \(e^{-j\omega n_0}\)。错项写反时移相位或混淆变量。易错点：其幅度谱恒为1。

**来源：** 基于重点习题5.9（由虚部、单边性与Parseval恢复序列）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.9
- OPPENHEIM-2E-LIU-01｜习题5.9｜PDF 280｜印刷页 257｜题号 5.9

---

## scut811-p1-q0237｜5.1｜transform_pair

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** \(a^{n-1}u[n-1]\)，\(|a|<1\)，对应的DTFT是哪一个？

- A. \(e^{-j\omega}/(1-ae^{-j\omega})\) ✅
- B. \(1/(1-ae^{-j\omega})\) · `WRONG_DELAY_FACTOR`
- C. \(e^{j\omega}/(1-ae^{-j\omega})\) · `WRONG_SHIFT_DIRECTION`
- D. \(a/(1-ae^{-j\omega})\) · `WRONG_COEFFICIENT_NORMALIZATION`

**解析：** 正确：它是 \(a^n u[n]\) 右移1点，频谱乘 \(e^{-j\omega}\)。错项漏延时因子、写反相位或误乘a。易错点：右移1点对应负指数相位。

**来源：** 基于重点习题5.23（由波形求频谱取值、积分、实部及Parseval量）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.23
- OPPENHEIM-2E-LIU-01｜习题5.23｜PDF 282｜印刷页 259｜题号 5.23

---

## scut811-p1-q0238｜5.1｜transform_pair

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** 有限长矩形序列 \(x[n]=1,0\le n\le N-1\) 的DTFT是哪一项？

- A. \(N e^{-j\omega N}\) · `MISS_SCALE_FACTOR`
- B. \(e^{-j\omega(N-1)/2}\frac{\sin(N\omega/2)}{\sin(\omega/2)}\) ✅
- C. \(\sin(N\omega)/\sin\omega\) · `WRONG_FREQUENCY_SCALE`
- D. \(e^{j\omega(N-1)/2}\frac{\sin(N\omega/2)}{\sin(\omega/2)}\) · `WRONG_SHIFT_DIRECTION`

**解析：** 正确：有限几何和化为线性相位乘Dirichlet核。错项尺度、相位符号或频率依赖错误。易错点：零频极限必须为N。

**来源：** 基于重点习题5.24（实虚、对称与周期性质；周期序列子问与5.2有限关联）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.24
- OPPENHEIM-2E-LIU-01｜习题5.24｜PDF 282｜印刷页 259｜题号 5.24

---

## scut811-p1-q0239｜5.1｜transform_pair

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** 双边序列 \(a^{|n|},|a|<1\) 的DTFT是什么？

- A. \((1+a^2)/(1-2a\cos\omega+a^2)\) · `SIGN_ERROR`
- B. \((1-a^2)/(1-2a\sin\omega+a^2)\) · `SIGN_ERROR`
- C. \((1-a^2)/(1-2a\cos\omega+a^2)\) ✅
- D. \(1/(1-ae^{-j\omega})\) · `MISSING_TIME_REVERSAL`

**解析：** 正确：左右两边几何级数相加得到实偶表达式。错项只保留右边或写错分子/余弦。易错点：实时域偶序列的DTFT应实偶。

**来源：** 基于重点习题5.32（卷积与逆变换积分关系辨析）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.32
- OPPENHEIM-2E-LIU-01｜习题5.32｜PDF 285｜印刷页 262｜题号 5.32

---

## scut811-p1-q0240｜5.1｜transform_pair

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** \((-1)^n x[n]\) 与 \(x[n]\leftrightarrow X(e^{j\omega})\) 的关系是哪一个？

- A. \(X(e^{j(\omega+1)})\) · `WRONG_FREQUENCY_SCALE`
- B. \((-1)^nX(e^{j\omega})\) · `CONFUSE_CT_DT`
- C. \(X(e^{-j\omega})\) · `MISSING_TIME_REVERSAL`
- D. \((-1)^nx[n]\leftrightarrow X(e^{j(\omega-\pi)})\) ✅

**解析：** 正确：\((-1)^n=e^{j\pi n}\)，故频谱平移 \(\pi\)。错项漏角频率单位或混淆反转。易错点：加减 \(\pi\) 在 \(2\pi\) 周期下等价。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0241｜5.1｜error_discrimination

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** 学生认为DTFT只在 \([-\pi,\pi]\) 内定义。错在哪里？

- A. DTFT对全部实数 \(\omega\) 定义，并以 \(2\pi\) 周期重复 ✅
- B. DTFT只在整数频率定义 · `CONFUSE_CT_DT`
- C. DTFT周期为序列长度N · `WRONG_MOD_N`
- D. DTFT不具有周期性 · `WRONG_PERIOD`

**解析：** 正确：\([-\pi,\pi]\) 只是常用的一个主值区间。错项混淆DTFS或否认周期性。易错点：区间端点以外由周期延拓确定。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0242｜5.1｜error_discrimination

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** 学生把DTFT分析式写成对 \(\omega\) 积分。核心错误是什么？

- A. 应对频谱模平方求和 · `FORGOT_MAGNITUDE_SQUARED`
- B. 分析式应对离散时间下标n求和 ✅
- C. 应对n积分 · `CONFUSE_CT_DT`
- D. 应只取n=0 · `WRONG_DC_COEFFICIENT`

**解析：** 正确：时域离散决定分析运算为求和，频率仍连续。错项继续混淆变量或能量。易错点：离散时间对应频域周期，而非频率离散。

**来源：** 基于重点习题5.9（由虚部、单边性与Parseval恢复序列）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.9
- OPPENHEIM-2E-LIU-01｜习题5.9｜PDF 280｜印刷页 257｜题号 5.9

---

## scut811-p1-q0243｜5.1｜error_discrimination

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** \(a^nu[n]\) 的DTFT推导中未写 \(|a|<1\)。问题是什么？

- A. 漏了时间反转 · `MISSING_TIME_REVERSAL`
- B. 漏了模平方 · `FORGOT_MAGNITUDE_SQUARED`
- C. 忽略了几何级数收敛条件 ✅
- D. 漏了 \(2\pi\) · `MISSING_2PI`

**解析：** 正确：右边无限几何和只有在 \(|a|<1\) 时按普通意义收敛。错项与收敛无关。易错点：变换对必须连同条件记忆。

**来源：** 基于重点习题5.23（由波形求频谱取值、积分、实部及Parseval量）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.23
- OPPENHEIM-2E-LIU-01｜习题5.23｜PDF 282｜印刷页 259｜题号 5.23

---

## scut811-p1-q0244｜5.1｜error_discrimination

**知识点：** kp-5.1 非周期序列与DTFT

**题干：** 两个频谱表达式相差 \(2\pi\) 平移，学生判定它们不同。忽略了什么？

- A. DTFS下标模N · `WRONG_MOD_N`
- B. CTFT对偶性 · `WRONG_DUALITY_FACTOR`
- C. 时域共轭对称 · `IGNORED_CONJUGATE_SYMMETRY`
- D. DTFT的 \(2\pi\) 周期性 ✅

**解析：** 正确：\(X(e^{j(\omega+2\pi)})=X(e^{j\omega})\)。错项引用其他章节性质。易错点：比较DTFT表达式前先做模 \(2\pi\) 化简。

**来源：** 基于重点习题5.24（实虚、对称与周期性质；周期序列子问与5.2有限关联）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.24
- OPPENHEIM-2E-LIU-01｜习题5.24｜PDF 282｜印刷页 259｜题号 5.24

---

## scut811-p1-q0245｜5.2｜concept

**知识点：** kp-5.2 周期序列的傅里叶变换

**题干：** 周期序列的DTFT在频域通常是什么形式？

- A. 以 \(2\pi\) 周期重复的冲激线谱 ✅
- B. 非周期连续曲线 · `CONFUSE_CT_DT`
- C. 只含零频冲激 · `WRONG_HARMONIC_INDEX`
- D. 有限个不重复的普通数值 · `WRONG_PERIOD`

**解析：** 正确：周期序列由有限组离散谐波组成，其DTFT是周期冲激列。错项混淆非周期序列和DTFS系数表。易错点：DTFT频率轴本身仍以 \(2\pi\) 周期重复。

**来源：** 基于重点习题5.24（实虚、对称与周期性质；周期序列子问与5.2有限关联）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.24
- OPPENHEIM-2E-LIU-01｜习题5.24｜PDF 282｜印刷页 259｜题号 5.24

---

## scut811-p1-q0246｜5.2｜formula

**知识点：** kp-5.2 周期序列的傅里叶变换

**题干：** N周期序列DTFS系数为 \(a_k\)，其DTFT可写成什么？

- A. \(\sum_na_ne^{-j\omega n}\) 且无周期冲激 · `WRONG_PERIOD`
- B. \(2\pi\sum_{k=0}^{N-1}a_k\sum_{r=-\infty}^{\infty}\delta(\omega-2\pi k/N-2\pi r)\) ✅
- C. \(\sum_ka_k\delta(\omega-k)\) · `MISSING_2PI`
- D. \(2\pi\sum_ka_k\delta(\omega-kN)\) · `WRONG_FREQUENCY_SCALE`

**解析：** 正确：每个DTFS谐波在其频率及所有 \(2\pi\) 平移处产生冲激。错项漏周期延拓、频率尺度或权重。易错点：基本谱线间隔是 \(2\pi/N\)。

**来源：** 基于重点习题5.24（实虚、对称与周期性质；周期序列子问与5.2有限关联）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.24
- OPPENHEIM-2E-LIU-01｜习题5.24｜PDF 282｜印刷页 259｜题号 5.24

---

## scut811-p1-q0247｜5.2｜transform_pair

**知识点：** kp-5.2 周期序列的傅里叶变换

**题干：** 常数序列 \(x[n]=1\) 的DTFT是什么？

- A. \(1\) · `CONFUSE_CT_DT`
- B. \(\sum_r\delta(\omega-r)\) · `MISSING_2PI`
- C. \(2\pi\sum_{r=-\infty}^{\infty}\delta(\omega-2\pi r)\) ✅
- D. \(2\pi\delta(\omega)\) · `WRONG_PERIOD`

**解析：** 正确：常数序列是周期1序列，频谱冲激必须每 \(2\pi\) 重复。错项只保留主值冲激或混入CTFT。易错点：写DTFT时不能忘周期延拓。

**来源：** 基于重点习题5.24（实虚、对称与周期性质；周期序列子问与5.2有限关联）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.24
- OPPENHEIM-2E-LIU-01｜习题5.24｜PDF 282｜印刷页 259｜题号 5.24

---

## scut811-p1-q0248｜5.2｜transform_pair

**知识点：** kp-5.2 周期序列的傅里叶变换

**题干：** 序列 \(e^{j\omega_0n}\) 的DTFT是哪一个？

- A. \(2\pi\delta(\omega-\omega_0)\) · `WRONG_PERIOD`
- B. \(2\pi\sum_r\delta(\omega+\omega_0-2\pi r)\) · `SIGN_ERROR`
- C. \(e^{-j\omega\omega_0}\) · `CONFUSE_CT_DT`
- D. \(2\pi\sum_r\delta(\omega-\omega_0-2\pi r)\) ✅

**解析：** 正确：单一离散时间复指数对应以 \(2\pi\) 重复的谱线。错项漏周期副本、写反频率或混淆变量。易错点：DTFT线谱也必须周期延拓。

**来源：** 基于重点习题5.24（实虚、对称与周期性质；周期序列子问与5.2有限关联）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.24
- OPPENHEIM-2E-LIU-01｜习题5.24｜PDF 282｜印刷页 259｜题号 5.24

---

## scut811-p1-q0249｜5.2｜transform_pair

**知识点：** kp-5.2 周期序列的傅里叶变换

**题干：** \(\cos(\omega_0n)\) 的DTFT包含哪些谱线？

- A. 在 \(\pm\omega_0+2\pi r\) 处各有权重 \(\pi\) 的冲激 ✅
- B. 只在 \(\omega_0\) 处有权重 \(2\pi\) 的冲激 · `IGNORED_CONJUGATE_SYMMETRY`
- C. 在 \(\pm\omega_0\) 处各有权重1且不重复 · `WRONG_PERIOD`
- D. 在零频有权重 \(2\pi\) 的冲激 · `WRONG_DC_COEFFICIENT`

**解析：** 正确：余弦含正负两个系数1/2的复指数，每条谱线权重为 \(\pi\) 并周期重复。错项漏一侧、漏周期或误作直流。易错点：实余弦的双边谱和DTFT周期性都要保留。

**来源：** 基于重点习题5.24（实虚、对称与周期性质；周期序列子问与5.2有限关联）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.24
- OPPENHEIM-2E-LIU-01｜习题5.24｜PDF 282｜印刷页 259｜题号 5.24

---

## scut811-p1-q0250｜5.2｜error_discrimination

**知识点：** kp-5.2 周期序列的傅里叶变换

**题干：** 学生写 \(1\leftrightarrow2\pi\delta(\omega)\) 作为完整DTFT。漏了什么？

- A. 频率轴应改成离散k · `CONFUSE_CT_DT`
- B. 频域冲激应每隔 \(2\pi\) 周期重复 ✅
- C. 冲激权重应改成1 · `MISSING_2PI`
- D. 时间序列应改成冲激 · `CONFUSE_IMPULSE_STEP`

**解析：** 正确：完整DTFT为 \(2\pi\sum_r\delta(\omega-2\pi r)\)。错项改变权重或变换类型。易错点：只画主值区间时可见一条，但公式仍需说明周期。

**来源：** 基于重点习题5.24（实虚、对称与周期性质；周期序列子问与5.2有限关联）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.24
- OPPENHEIM-2E-LIU-01｜习题5.24｜PDF 282｜印刷页 259｜题号 5.24

---

## scut811-p1-q0251｜5.2｜error_discrimination

**知识点：** kp-5.2 周期序列的傅里叶变换

**题干：** 周期N序列的谱线间隔被写为 \(N\)。正确间隔是什么？

- A. \(2\pi N\) · `WRONG_FREQUENCY_SCALE`
- B. \(1/N\) · `MISSING_2PI`
- C. \(2\pi/N\) ✅
- D. \(N/2\pi\) · `WRONG_FREQUENCY_SCALE`

**解析：** 正确：DTFS基频为 \(\omega_0=2\pi/N\)。错项取倒数、乘错N或漏 \(2\pi\)。易错点：N是样本周期，频率间隔与其成反比。

**来源：** 基于重点习题5.24（实虚、对称与周期性质；周期序列子问与5.2有限关联）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.24
- OPPENHEIM-2E-LIU-01｜习题5.24｜PDF 282｜印刷页 259｜题号 5.24

---

## scut811-p1-q0252｜5.2｜error_discrimination

**知识点：** kp-5.2 周期序列的傅里叶变换

**题干：** 周期序列DTFT只写了 \(0\le k<N\) 的冲激，却未做 \(2\pi\) 延拓。问题是什么？

- A. 应把k改成连续时间t · `CONFUSE_CT_DT`
- B. 应把每条权重平方 · `FORGOT_MAGNITUDE_SQUARED`
- C. 应对下标模N后删除冲激 · `WRONG_MOD_N`
- D. 表达式不是完整DTFT，缺少所有周期副本 ✅

**解析：** 正确：一个主值区间内的谱线还需按 \(2\pi\) 重复。错项混淆变量、能量或DTFS索引。易错点：有限独立系数不等于频谱只存在一段。

**来源：** 基于重点习题5.24（实虚、对称与周期性质；周期序列子问与5.2有限关联）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.24
- OPPENHEIM-2E-LIU-01｜习题5.24｜PDF 282｜印刷页 259｜题号 5.24

---

## scut811-p1-q0253｜5.3｜concept

**知识点：** kp-5.3 DTFT性质

**题干：** 实时域序列的DTFT满足哪一关系？

- A. \(X(e^{-j\omega})=X^*(e^{j\omega})\) ✅
- B. \(X(e^{-j\omega})=X(e^{j\omega})\) 对所有实序列成立 · `IGNORED_CONJUGATE_SYMMETRY`
- C. \(X(e^{j\omega})\) 必为实数 · `IGNORED_CONJUGATE_SYMMETRY`
- D. 频谱不必周期 · `WRONG_PERIOD`

**解析：** 正确：实序列产生共轭对称DTFT。错项把共轭对称误成偶或纯实，并忽略周期性。易错点：实偶序列才对应实偶频谱。

**来源：** 基于重点习题5.9（由虚部、单边性与Parseval恢复序列）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.9
- OPPENHEIM-2E-LIU-01｜习题5.9｜PDF 280｜印刷页 257｜题号 5.9

---

## scut811-p1-q0254｜5.3｜formula

**知识点：** kp-5.3 DTFT性质

**题干：** 若 \(x[n]\leftrightarrow X(e^{j\omega})\)，则 \(x[n-n_0]\) 对应什么？

- A. \(n_0X(e^{j\omega})\) · `MISS_SCALE_FACTOR`
- B. \(e^{-j\omega n_0}X(e^{j\omega})\) ✅
- C. \(e^{j\omega n_0}X(e^{j\omega})\) · `WRONG_SHIFT_DIRECTION`
- D. \(X(e^{j(\omega-n_0)})\) · `WRONG_SHIFT_DIRECTION`

**解析：** 正确：离散时间右移产生负线性相位。错项写反符号或把时移当频移。易错点：与CTFT时移形式一致，但n0为整数。

**来源：** 基于重点习题5.9（由虚部、单边性与Parseval恢复序列）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.9
- OPPENHEIM-2E-LIU-01｜习题5.9｜PDF 280｜印刷页 257｜题号 5.9

---

## scut811-p1-q0255｜5.3｜formula

**知识点：** kp-5.3 DTFT性质

**题干：** 若 \(x[n]\leftrightarrow X(e^{j\omega})\)，则 \(e^{j\omega_0n}x[n]\) 对应什么？

- A. \(e^{-j\omega n_0}X(e^{j\omega})\) · `WRONG_SHIFT_DIRECTION`
- B. \(X(e^{j\omega_0})\) · `WRONG_FREQUENCY_SCALE`
- C. \(X(e^{j(\omega-\omega_0)})\) ✅
- D. \(X(e^{j(\omega+\omega_0)})\) · `WRONG_SHIFT_DIRECTION`

**解析：** 正确：乘正频率复指数使DTFT右移 \(\omega_0\)。错项写反频移或混入时移。易错点：结果仍需按 \(2\pi\) 周期理解。

**来源：** 基于重点习题5.23（由波形求频谱取值、积分、实部及Parseval量）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.23
- OPPENHEIM-2E-LIU-01｜习题5.23｜PDF 282｜印刷页 259｜题号 5.23

---

## scut811-p1-q0256｜5.3｜formula

**知识点：** kp-5.3 DTFT性质

**题干：** 序列反转 \(x[-n]\) 的DTFT是什么？

- A. \(-X(e^{j\omega})\) · `SIGN_ERROR`
- B. \(X^*(e^{j\omega})\) · `IGNORED_CONJUGATE_SYMMETRY`
- C. \(X(e^{j/\omega})\) · `WRONG_FREQUENCY_SCALE`
- D. \(X(e^{-j\omega})\) ✅

**解析：** 正确：令m=-n可得频率变量反转。错项混入函数负号、共轭或倒数尺度。易错点：只有实序列时反转谱才等于共轭谱。

**来源：** 基于重点习题5.24（实虚、对称与周期性质；周期序列子问与5.2有限关联）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.24
- OPPENHEIM-2E-LIU-01｜习题5.24｜PDF 282｜印刷页 259｜题号 5.24

---

## scut811-p1-q0257｜5.3｜formula

**知识点：** kp-5.3 DTFT性质

**题干：** 序列乘以n的DTFT是什么？

- A. \(j\frac{d}{d\omega}X(e^{j\omega})\) ✅
- B. \(-j\frac{d}{d\omega}X(e^{j\omega})\) · `SIGN_ERROR`
- C. \(j\omega X(e^{j\omega})\) · `WRONG_DIFFERENTIATION_FACTOR`
- D. \(nX(e^{j\omega})\) · `CONFUSE_CT_DT`

**解析：** 正确：对DTFT关于 \(\omega\) 求导得到 \(-j\sum nx[n]e^{-j\omega n}\)，故乘j。错项写反符号或混入CT微分。易错点：离散时间没有普通的 \(dx/dt\) 性质。

**来源：** 基于重点习题5.25（频谱实虚部分重组与时移）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.25
- OPPENHEIM-2E-LIU-01｜习题5.25｜PDF 282｜印刷页 259｜题号 5.25

---

## scut811-p1-q0258｜5.3｜formula

**知识点：** kp-5.3 DTFT性质

**题干：** DTFT Parseval能量公式是哪一个？

- A. \(\sum_n|x[n]|=\frac1{2\pi}\int|X|d\omega\) · `FORGOT_MAGNITUDE_SQUARED`
- B. \(\sum_n|x[n]|^2=\frac1{2\pi}\int_{-\pi}^{\pi}|X(e^{j\omega})|^2d\omega\) ✅
- C. \(\sum_nx[n]=\int X(e^{j\omega})d\omega\) · `FORGOT_MAGNITUDE_SQUARED`
- D. \(\sum_n|x[n]|^2=2\pi\int|X|^2d\omega\) · `WRONG_PARSEVAL_FACTOR`

**解析：** 正确：离散序列能量等于一周期频谱模平方积分乘 \(1/2\pi\)。错项漏平方或系数错误。易错点：频域只积一个完整周期。

**来源：** 基于重点习题5.26（频谱变形、序列变换、延迟与低通输出）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.26
- OPPENHEIM-2E-LIU-01｜习题5.26｜PDF 282｜印刷页 259｜题号 5.26

---

## scut811-p1-q0259｜5.3｜formula

**知识点：** kp-5.3 DTFT性质

**题干：** 若 \(y[n]=x[n]-x[n-1]\)，则 \(Y(e^{j\omega})\) 是什么？

- A. \(j\omega X(e^{j\omega})\) · `CONFUSE_CT_DT`
- B. \(X(e^{j\omega})/(1-e^{-j\omega})\) · `WRONG_DIFFERENTIATION_FACTOR`
- C. \((1-e^{-j\omega})X(e^{j\omega})\) ✅
- D. \((1-e^{j\omega})X(e^{j\omega})\) · `WRONG_SHIFT_DIRECTION`

**解析：** 正确：延时一位对应 \(e^{-j\omega}\)，作差得乘子 \(1-e^{-j\omega}\)。错项写反延时或套连续微分。易错点：离散差分的频率因子不是 \(j\omega\)。

**来源：** 基于重点习题5.37（复序列的实部、共轭反转及偶部）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.37
- OPPENHEIM-2E-LIU-01｜习题5.37｜PDF 287｜印刷页 264｜题号 5.37

---

## scut811-p1-q0260｜5.3｜formula

**知识点：** kp-5.3 DTFT性质

**题干：** 若 \(x^*[n]\) 的DTFT用X表示，正确结果是什么？

- A. \(X^*(e^{j\omega})\) · `IGNORED_CONJUGATE_SYMMETRY`
- B. \(X(e^{-j\omega})\) · `IGNORED_CONJUGATE_SYMMETRY`
- C. \(-X^*(e^{-j\omega})\) · `SIGN_ERROR`
- D. \(X^*(e^{-j\omega})\) ✅

**解析：** 正确：对DTFT求共轭时指数符号反转，因此得到 \(X^*(e^{-j\omega})\)。错项只做共轭或只做反转。易错点：共轭性质包含频率反转。

**来源：** 基于重点习题5.49（频域微分与系统性质、频域积分与相乘）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.49
- OPPENHEIM-2E-LIU-01｜习题5.49｜PDF 289｜印刷页 266｜题号 5.49

---

## scut811-p1-q0261｜5.3｜transform_pair

**知识点：** kp-5.3 DTFT性质

**题干：** 已知 \(x[n]\leftrightarrow X(e^{j\omega})\)，哪一对表示延时3点？

- A. \(x[n-3]\leftrightarrow e^{-j3\omega}X(e^{j\omega})\) ✅
- B. \(x[n-3]\leftrightarrow e^{j3\omega}X(e^{j\omega})\) · `WRONG_SHIFT_DIRECTION`
- C. \(x[n-3]\leftrightarrow X(e^{j(\omega-3)})\) · `WRONG_SHIFT_DIRECTION`
- D. \(x[3n]\leftrightarrow e^{-j3\omega}X(e^{j\omega})\) · `INVALID_TIME_SCALING_FOR_LTI`

**解析：** 正确：整数延时3产生 \(e^{-j3\omega}\)。错项相位符号错或混淆频移/抽取。易错点：离散时间尺度变换不能直接照搬CTFT公式。

**来源：** 基于重点习题5.9（由虚部、单边性与Parseval恢复序列）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.9
- OPPENHEIM-2E-LIU-01｜习题5.9｜PDF 280｜印刷页 257｜题号 5.9

---

## scut811-p1-q0262｜5.3｜transform_pair

**知识点：** kp-5.3 DTFT性质

**题干：** 已知 \(x[n]\leftrightarrow X(e^{j\omega})\)，哪一对表示频移 \(\pi\)？

- A. \(x[n-1]\leftrightarrow X(e^{j(\omega-\pi)})\) · `WRONG_SHIFT_DIRECTION`
- B. \((-1)^nx[n]\leftrightarrow X(e^{j(\omega-\pi)})\) ✅
- C. \((-1)^nx[n]\leftrightarrow-X(e^{j\omega})\) · `SIGN_ERROR`
- D. \(x[-n]\leftrightarrow X(e^{j(\omega-\pi)})\) · `MISSING_TIME_REVERSAL`

**解析：** 正确：\((-1)^n=e^{j\pi n}\) 触发频移性质。错项把调制当整体负号、反转或延时。易错点：在DTFT中 \(\omega-\pi\) 与 \(\omega+\pi\) 等价。

**来源：** 基于重点习题5.23（由波形求频谱取值、积分、实部及Parseval量）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.23
- OPPENHEIM-2E-LIU-01｜习题5.23｜PDF 282｜印刷页 259｜题号 5.23

---

## scut811-p1-q0263｜5.3｜transform_pair

**知识点：** kp-5.3 DTFT性质

**题干：** 哪一对正确体现序列反转？

- A. \(x[-n]\leftrightarrow X^*(e^{j\omega})\) 对任意复序列成立 · `IGNORED_CONJUGATE_SYMMETRY`
- B. \(x[-n]\leftrightarrow X(e^{j(\omega-\pi)})\) · `WRONG_SHIFT_DIRECTION`
- C. \(x[-n]\leftrightarrow X(e^{-j\omega})\) ✅
- D. \(x[-n]\leftrightarrow-X(e^{j\omega})\) · `SIGN_ERROR`

**解析：** 正确：序列下标反转对应频率反转。错项把反转当取负、共轭或频移。易错点：实序列时才可进一步写成共轭谱。

**来源：** 基于重点习题5.24（实虚、对称与周期性质；周期序列子问与5.2有限关联）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.24
- OPPENHEIM-2E-LIU-01｜习题5.24｜PDF 282｜印刷页 259｜题号 5.24

---

## scut811-p1-q0264｜5.3｜error_discrimination

**知识点：** kp-5.3 DTFT性质

**题干：** 学生写 \(x[n-n_0]\leftrightarrow e^{j\omega n_0}X\)。错误是什么？

- A. 应把n0改成连续时间t0 · `CONFUSE_CT_DT`
- B. 应乘 \(2\pi\) · `MISSING_2PI`
- C. 应把X取模平方 · `FORGOT_MAGNITUDE_SQUARED`
- D. 延时相位符号应为负 ✅

**解析：** 正确：右移n0点对应 \(e^{-j\omega n_0}\)。错项引入无关变量、常数或能量。易错点：延时对应负线性相位。

**来源：** 基于重点习题5.9（由虚部、单边性与Parseval恢复序列）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.9
- OPPENHEIM-2E-LIU-01｜习题5.9｜PDF 280｜印刷页 257｜题号 5.9

---

## scut811-p1-q0265｜5.3｜error_discrimination

**知识点：** kp-5.3 DTFT性质

**题干：** 学生把 \(x[2n]\) 的DTFT直接写成 \(\frac12X(e^{j\omega/2})\)。为什么不成立？

- A. 离散时间抽取会产生频谱混叠，不能直接套连续时间尺度公式 ✅
- B. 系数只需改成2 · `MISS_SCALE_FACTOR`
- C. 频谱只需反转 · `MISSING_TIME_REVERSAL`
- D. 因为DTFT不周期 · `WRONG_PERIOD`

**解析：** 正确：下标只能取整数，抽取包含多个移位频谱副本。错项只是修系数或否认周期性。易错点：CTFT的 \(1/|a|\) 尺度公式不可直接用于DTFT。

**来源：** 基于重点习题5.23（由波形求频谱取值、积分、实部及Parseval量）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.23
- OPPENHEIM-2E-LIU-01｜习题5.23｜PDF 282｜印刷页 259｜题号 5.23

---

## scut811-p1-q0266｜5.3｜error_discrimination

**知识点：** kp-5.3 DTFT性质

**题干：** 学生由实序列推出DTFT必为偶函数。缺少什么条件？

- A. 还需序列长度为偶数 · `WRONG_MOD_N`
- B. 还需序列为偶序列 ✅
- C. 还需序列为因果序列 · `CAUSALITY_ERROR`
- D. 还需序列为周期序列 · `WRONG_PERIOD`

**解析：** 正确：实性只保证共轭对称；实且偶才保证频谱实偶。错项不推出偶频谱。易错点：区分实性、偶性与共轭对称。

**来源：** 基于重点习题5.24（实虚、对称与周期性质；周期序列子问与5.2有限关联）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.24
- OPPENHEIM-2E-LIU-01｜习题5.24｜PDF 282｜印刷页 259｜题号 5.24

---

## scut811-p1-q0267｜5.3｜error_discrimination

**知识点：** kp-5.3 DTFT性质

**题干：** 学生把 \(x[n]-x[n-1]\) 的频率因子写成 \(j\omega\)。混淆了什么？

- A. 漏了下标模N · `WRONG_MOD_N`
- B. 漏了频谱卷积 · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- C. 把离散一阶差分当成连续时间微分 ✅
- D. 漏了模平方 · `FORGOT_MAGNITUDE_SQUARED`

**解析：** 正确：离散差分因子是 \(1-e^{-j\omega}\)，不是 \(j\omega\)。错项与差分性质无关。易错点：低频近似相似不代表恒等。

**来源：** 基于重点习题5.25（频谱实虚部分重组与时移）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.25
- OPPENHEIM-2E-LIU-01｜习题5.25｜PDF 282｜印刷页 259｜题号 5.25

---

## scut811-p1-q0268｜5.3｜error_discrimination

**知识点：** kp-5.3 DTFT性质

**题干：** DTFT Parseval右侧积分取 \(( -\infty,\infty)\) 会有什么问题？

- A. 应改为对整数频率求和 · `CONFUSE_CT_DT`
- B. 应删除模平方 · `FORGOT_MAGNITUDE_SQUARED`
- C. 应把系数改成 \(2\pi\) · `WRONG_PARSEVAL_FACTOR`
- D. 因频谱周期，会重复累计同一能量；应只取一个 \(2\pi\) 周期 ✅

**解析：** 正确：DTFT周期延拓使全轴积分对非零能量通常发散。错项改变了变换类型或能量定义。易错点：DTFT逆变换和Parseval都只需一个周期。

**来源：** 基于重点习题5.26（频谱变形、序列变换、延迟与低通输出）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.26
- OPPENHEIM-2E-LIU-01｜习题5.26｜PDF 282｜印刷页 259｜题号 5.26

---

## scut811-p1-q0269｜5.3｜error_discrimination

**知识点：** kp-5.3 DTFT性质

**题干：** 学生认为 \(X(e^{j(\omega+2\pi)})=-X(e^{j\omega})\)。正确关系是什么？

- A. 两者完全相等 ✅
- B. 两者互为共轭 · `IGNORED_CONJUGATE_SYMMETRY`
- C. 只有实序列时相等 · `IGNORED_CONJUGATE_SYMMETRY`
- D. 只有偶序列时相等 · `WRONG_PERIOD`

**解析：** 正确：指数核增加 \(2\pi\) 后对整数n不变，因此对任意序列均相等。错项额外要求实性或偶性。易错点：\(2\pi\) 周期性与信号类型无关。

**来源：** 基于重点习题5.37（复序列的实部、共轭反转及偶部）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.37
- OPPENHEIM-2E-LIU-01｜习题5.37｜PDF 287｜印刷页 264｜题号 5.37

---

## scut811-p1-q0270｜5.3｜error_discrimination

**知识点：** kp-5.3 DTFT性质

**题干：** 频移性质中学生写 \(e^{j\omega_0n}x[n]\leftrightarrow X(e^{j(\omega+\omega_0)})\)。如何纠正？

- A. 应把X取共轭 · `IGNORED_CONJUGATE_SYMMETRY`
- B. 括号内应为 \(\omega-\omega_0\) ✅
- C. 应把指数改成 \(e^{j\omega n_0}\) · `WRONG_SHIFT_DIRECTION`
- D. 应乘 \(1/2\pi\) · `MISSING_2PI`

**解析：** 正确：正指数调制把频谱右移，所以函数参数减 \(\omega_0\)。错项混入时移、归一化或共轭。易错点：跟踪原零频峰移动到哪里。

**来源：** 基于重点习题5.49（频域微分与系统性质、频域积分与相乘）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.49
- OPPENHEIM-2E-LIU-01｜习题5.49｜PDF 289｜印刷页 266｜题号 5.49

---

## scut811-p1-q0271｜5.3｜error_discrimination

**知识点：** kp-5.3 DTFT性质

**题干：** 学生写 \(nx[n]\leftrightarrow j\omega X(e^{j\omega})\)。错在哪里？

- A. 应为 \(-X\) · `SIGN_ERROR`
- B. 应对n求积分 · `CONFUSE_CT_DT`
- C. 应为对频率求导 \(j\,dX/d\omega\) ✅
- D. 应为 \(X/(j\omega)\) · `WRONG_DIFFERENTIATION_FACTOR`

**解析：** 正确：时域乘下标对应频域微分。错项混入连续时间微分乘子或无关运算。易错点：变量相乘与另一域求导配对。

**来源：** 基于重点习题5.9（由虚部、单边性与Parseval恢复序列）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.9
- OPPENHEIM-2E-LIU-01｜习题5.9｜PDF 280｜印刷页 257｜题号 5.9

---

## scut811-p1-q0272｜5.3｜error_discrimination

**知识点：** kp-5.3 DTFT性质

**题干：** 比较 \(X(e^{j(\omega-3\pi)})\) 与 \(X(e^{j(\omega-\pi)})\)，学生认为不同。结论是什么？

- A. 两者相反 · `SIGN_ERROR`
- B. 两者仅幅度相同 · `IGNORED_CONJUGATE_SYMMETRY`
- C. 只有N周期序列才相同 · `WRONG_MOD_N`
- D. 两者相同，因为自变量相差 \(2\pi\) ✅

**解析：** 正确：DTFT对频率变量具有 \(2\pi\) 周期性。错项混淆符号、共轭或DTFS周期。易错点：先把所有频移量模 \(2\pi\)。

**来源：** 基于重点习题5.23（由波形求频谱取值、积分、实部及Parseval量）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.23
- OPPENHEIM-2E-LIU-01｜习题5.23｜PDF 282｜印刷页 259｜题号 5.23

---

## scut811-p1-q0273｜5.4｜concept

**知识点：** kp-5.4 卷积性质

**题干：** 离散时间卷积和在DTFT域对应什么？

- A. 两个DTFT直接相乘 ✅
- B. 两个DTFT卷积并乘 \(1/2\pi\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- C. 两个DTFT相加 · `LINEARITY_ERROR`
- D. 两个DTFT模平方相乘 · `FORGOT_MAGNITUDE_SQUARED`

**解析：** 正确：\(x*h\leftrightarrow XH\)。错项混淆时域相乘、线性叠加或能量。易错点：离散卷积和与连续卷积积分具有相同跨域结构。

**来源：** 基于重点习题5.12（sinc平方与理想低通、频域周期卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.12
- OPPENHEIM-2E-LIU-01｜习题5.12｜PDF 280｜印刷页 257｜题号 5.12

---

## scut811-p1-q0274｜5.4｜formula

**知识点：** kp-5.4 卷积性质

**题干：** 若 \(y[n]=x[n]*h[n]\)，则 \(Y(e^{j\omega})\) 是什么？

- A. \(X/H\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- B. \(X(e^{j\omega})H(e^{j\omega})\) ✅
- C. \(X*H\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- D. \((X+H)/2\) · `LINEARITY_ERROR`

**解析：** 正确：DTFT卷积定理把时域卷积和化为频域点乘。错项把域内卷积、平均或除法混入。易错点：频率响应仍由 \(H=Y/X\) 求得。

**来源：** 基于重点习题5.12（sinc平方与理想低通、频域周期卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.12
- OPPENHEIM-2E-LIU-01｜习题5.12｜PDF 280｜印刷页 257｜题号 5.12

---

## scut811-p1-q0275｜5.4｜formula

**知识点：** kp-5.4 卷积性质

**题干：** 频域周期卷积 \(X(e^{j\omega})*_{2\pi}H(e^{j\omega})\) 对应时域什么？

- A. \(x[n]*h[n]\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- B. \(x[n]h[n]/(2\pi)\) · `MISSING_2PI`
- C. \(2\pi x[n]h[n]\) ✅
- D. \(x[n]h[n]\) · `MISSING_2PI`

**解析：** 正确：时域乘积对应 \(1/2\pi\) 倍的频域周期卷积，因此反向读得 \(2\pi xh\)。错项漏或倒置系数。易错点：DTFT频域卷积需按一个周期定义。

**来源：** 基于重点习题5.14（频响周期约束和指数输入下的脉冲响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.14
- OPPENHEIM-2E-LIU-01｜习题5.14｜PDF 280｜印刷页 257｜题号 5.14

---

## scut811-p1-q0276｜5.4｜transform_pair

**知识点：** kp-5.4 卷积性质

**题干：** 已知 \(x_1\leftrightarrow X_1\)、\(x_2\leftrightarrow X_2\)，哪一对正确？

- A. \(x_1*x_2\leftrightarrow X_1*X_2\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- B. \(x_1x_2\leftrightarrow X_1X_2\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- C. \(x_1*x_2\leftrightarrow X_1+X_2\) · `LINEARITY_ERROR`
- D. \(x_1[n]*x_2[n]\leftrightarrow X_1(e^{j\omega})X_2(e^{j\omega})\) ✅

**解析：** 正确：时域卷积对应频域乘积。错项在两个域使用同一运算或误作相加。易错点：星号跨域后变成普通乘号。

**来源：** 基于重点习题5.12（sinc平方与理想低通、频域周期卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.12
- OPPENHEIM-2E-LIU-01｜习题5.12｜PDF 280｜印刷页 257｜题号 5.12

---

## scut811-p1-q0277｜5.4｜transform_pair

**知识点：** kp-5.4 卷积性质

**题干：** \(x[n]*\delta[n-n_0]\) 的DTFT是哪一项？

- A. \(e^{-j\omega n_0}X(e^{j\omega})\) ✅
- B. \(e^{j\omega n_0}X(e^{j\omega})\) · `WRONG_SHIFT_DIRECTION`
- C. \(X(e^{j(\omega-n_0)})\) · `WRONG_SHIFT_DIRECTION`
- D. \(2\pi X(e^{j\omega})\) · `MISSING_2PI`

**解析：** 正确：与移位单位样值卷积得到 \(x[n-n_0]\)，再应用时移性质。错项相位符号或域变换错误。易错点：单位样值卷积负责平移。

**来源：** 基于重点习题5.14（频响周期约束和指数输入下的脉冲响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.14
- OPPENHEIM-2E-LIU-01｜习题5.14｜PDF 280｜印刷页 257｜题号 5.14

---

## scut811-p1-q0278｜5.4｜error_discrimination

**知识点：** kp-5.4 卷积性质

**题干：** 学生在卷积和中写 \(x[k]h[k-n]\)。与标准 \(h[n-k]\) 相比发生了什么？

- A. 只漏了 \(2\pi\) · `MISSING_2PI`
- B. 卷积核额外反向，通常得到错误结果 ✅
- C. 只是哑变量改名 · `WRONG_CONVOLUTION_INDEX`
- D. 两个序列同时平移 · `BOTH_SIGNALS_SHIFTED`

**解析：** 正确：\(h[k-n]\) 与 \(h[n-k]\) 一般不同，前者翻转方向相反。错项低估变化或混入其他错误。易错点：先写 \(h[-k]\)，再平移n。

**来源：** 基于重点习题5.12（sinc平方与理想低通、频域周期卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.12
- OPPENHEIM-2E-LIU-01｜习题5.12｜PDF 280｜印刷页 257｜题号 5.12

---

## scut811-p1-q0279｜5.4｜error_discrimination

**知识点：** kp-5.4 卷积性质

**题干：** 学生把 \(x*h\) 的DTFT写成频域卷积。应改为什么？

- A. 频域相除 · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- B. 频域模平方 · `FORGOT_MAGNITUDE_SQUARED`
- C. 频域普通乘积 \(XH\) ✅
- D. 频域相加 · `LINEARITY_ERROR`

**解析：** 正确：卷积定理将时域卷积和变为点乘。错项使用无关运算。易错点：不要因时域和频域都写星号而混淆。

**来源：** 基于重点习题5.14（频响周期约束和指数输入下的脉冲响应）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.14
- OPPENHEIM-2E-LIU-01｜习题5.14｜PDF 280｜印刷页 257｜题号 5.14

---

## scut811-p1-q0280｜5.4｜error_discrimination

**知识点：** kp-5.4 卷积性质

**题干：** 计算 \(y[n]=\sum_kx[k]h[n-k]\) 时，学生把n也作为求和变量消去。错误是什么？

- A. k必须固定为0 · `WRONG_CONVOLUTION_INDEX`
- B. n与k都应模N · `WRONG_MOD_N`
- C. h不应发生平移 · `MISSING_TIME_REVERSAL`
- D. n是输出下标，应保留；只有k是哑变量 ✅

**解析：** 正确：卷积和对k遍历，结果仍是n的函数。错项误解求和下标或周期卷积。易错点：每一步都检查输出变量n是否仍存在。

**来源：** 基于重点习题5.32（卷积与逆变换积分关系辨析）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.32
- OPPENHEIM-2E-LIU-01｜习题5.32｜PDF 285｜印刷页 262｜题号 5.32

---

## scut811-p1-q0281｜5.4｜error_discrimination

**知识点：** kp-5.4 卷积性质

**题干：** 两个有限长序列长度分别为L和M，线性卷积长度被写为 \(L+M\)。应为多少？

- A. \(L+M-1\) ✅
- B. \(LM\) · `WRONG_SUPPORT_INTERVAL`
- C. \(\max(L,M)\) · `WRONG_SUPPORT_INTERVAL`
- D. \(|L-M|\) · `WRONG_SUPPORT_INTERVAL`

**解析：** 正确：支撑端点相加后包含的整数点数为 \(L+M-1\)。错项混淆点数与端点跨度。易错点：单点与单点卷积长度应为1，可快速排除。

**来源：** 基于重点习题5.12（sinc平方与理想低通、频域周期卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.12
- OPPENHEIM-2E-LIU-01｜习题5.12｜PDF 280｜印刷页 257｜题号 5.12

---

## scut811-p1-q0282｜5.5｜concept

**知识点：** kp-5.5 相乘性质

**题干：** 离散时域相乘在DTFT域对应什么？

- A. 非周期频谱卷积且无系数 · `WRONG_PERIOD`
- B. 两个周期频谱的卷积并乘 \(1/(2\pi)\) ✅
- C. 频谱直接相乘 · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- D. 频谱相加 · `LINEARITY_ERROR`

**解析：** 正确：\(x_1x_2\leftrightarrow(1/2\pi)(X_1*_{2\pi}X_2)\)。错项混淆卷积定理或忽略周期性。易错点：DTFT频域卷积必须按周期处理。

**来源：** 基于重点习题5.15（时域sinc平方对应频域周期卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.15
- OPPENHEIM-2E-LIU-01｜习题5.15｜PDF 280｜印刷页 257｜题号 5.15

---

## scut811-p1-q0283｜5.5｜formula

**知识点：** kp-5.5 相乘性质

**题干：** 若 \(y[n]=x[n]g[n]\)，则 \(Y(e^{j\omega})\) 是什么？

- A. \(2\pi[X*G]\) · `MISSING_2PI`
- B. \(X+G\) · `LINEARITY_ERROR`
- C. \(\frac1{2\pi}[X*_{2\pi}G](e^{j\omega})\) ✅
- D. \(X(e^{j\omega})G(e^{j\omega})\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`

**解析：** 正确：时域点乘对应带 \(1/2\pi\) 的频域周期卷积。错项混成时域卷积或系数取反。易错点：频域结果仍以 \(2\pi\) 为周期。

**来源：** 基于重点习题5.15（时域sinc平方对应频域周期卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.15
- OPPENHEIM-2E-LIU-01｜习题5.15｜PDF 280｜印刷页 257｜题号 5.15

---

## scut811-p1-q0284｜5.5｜formula

**知识点：** kp-5.5 相乘性质

**题干：** \(x[n]\cos(\omega_0n)\) 的DTFT是哪一项？

- A. \(X(e^{j(\omega-\omega_0)})\) · `IGNORED_CONJUGATE_SYMMETRY`
- B. \(X(e^{j\omega})\cos\omega_0\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- C. \(2[X_-+X_+]\) · `MISS_FACTOR_2`
- D. \(\frac12[X(e^{j(\omega-\omega_0)})+X(e^{j(\omega+\omega_0)})]\) ✅

**解析：** 正确：余弦由正负两个复指数各占1/2构成。错项漏一侧、没有变换或倍数错误。易错点：两份移频谱还会按 \(2\pi\) 绕回。

**来源：** 基于重点习题5.15（时域sinc平方对应频域周期卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.15
- OPPENHEIM-2E-LIU-01｜习题5.15｜PDF 280｜印刷页 257｜题号 5.15

---

## scut811-p1-q0285｜5.5｜transform_pair

**知识点：** kp-5.5 相乘性质

**题干：** 哪一对正确描述离散余弦调制？

- A. \(x[n]\cos\omega_0n\leftrightarrow\frac12[X(\omega-\omega_0)+X(\omega+\omega_0)]\) ✅
- B. \(x[n]\cos\omega_0n\leftrightarrow X(\omega-\omega_0)\) · `IGNORED_CONJUGATE_SYMMETRY`
- C. \(x[n]\cos\omega_0n\leftrightarrow X(\omega)\cos\omega_0\) · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- D. \(x[n]\cos\omega_0n\leftrightarrow2[X_-+X_+]\) · `MISS_FACTOR_2`

**解析：** 正确：余弦调制产生两个半幅频移副本。错项漏副本、留在时域或倍数错误。易错点：DTFT副本越过边界后按 \(2\pi\) 折回。

**来源：** 基于重点习题5.15（时域sinc平方对应频域周期卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.15
- OPPENHEIM-2E-LIU-01｜习题5.15｜PDF 280｜印刷页 257｜题号 5.15

---

## scut811-p1-q0286｜5.5｜transform_pair

**知识点：** kp-5.5 相乘性质

**题干：** 若 \(g[n]=(-1)^n\)，则 \(x[n]g[n]\) 的频谱是什么？

- A. \(e^{-j\omega}X(e^{j\omega})\) · `WRONG_SHIFT_DIRECTION`
- B. \(X(e^{j(\omega-\pi)})\) ✅
- C. \(-X(e^{j\omega})\) · `SIGN_ERROR`
- D. \(X(e^{-j\omega})\) · `MISSING_TIME_REVERSAL`

**解析：** 正确：\((-1)^n=e^{j\pi n}\)，相乘使频谱平移 \(\pi\)。错项把逐点交替符号当整体负号、反转或延时。易错点：因周期性，加减 \(\pi\) 等价。

**来源：** 基于重点习题5.15（时域sinc平方对应频域周期卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.15
- OPPENHEIM-2E-LIU-01｜习题5.15｜PDF 280｜印刷页 257｜题号 5.15

---

## scut811-p1-q0287｜5.5｜error_discrimination

**知识点：** kp-5.5 相乘性质

**题干：** 学生写 \(x[n]g[n]\leftrightarrow XG\)。核心错误是什么？

- A. 应对应频域相除 · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- B. 应把两谱都取模平方 · `FORGOT_MAGNITUDE_SQUARED`
- C. 时域相乘应对应频域周期卷积 ✅
- D. 应对应频域相加 · `LINEARITY_ERROR`

**解析：** 正确：频域直接相乘对应时域卷积和。错项使用无关运算。易错点：区分时域星号卷积和普通乘号。

**来源：** 基于重点习题5.15（时域sinc平方对应频域周期卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.15
- OPPENHEIM-2E-LIU-01｜习题5.15｜PDF 280｜印刷页 257｜题号 5.15

---

## scut811-p1-q0288｜5.5｜error_discrimination

**知识点：** kp-5.5 相乘性质

**题干：** 离散余弦调制后只画一份右移频谱，漏了什么？

- A. 还应对频谱求导 · `WRONG_DIFFERENTIATION_FACTOR`
- B. 还应取时间反转 · `MISSING_TIME_REVERSAL`
- C. 还应删除周期副本 · `WRONG_PERIOD`
- D. 还应有一份左移频谱，且两份各乘1/2 ✅

**解析：** 正确：余弦包含正、负频率两个复指数分量。错项与调制展开无关。易错点：复指数调制一份，余弦调制两份。

**来源：** 基于重点习题5.15（时域sinc平方对应频域周期卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.15
- OPPENHEIM-2E-LIU-01｜习题5.15｜PDF 280｜印刷页 257｜题号 5.15

---

## scut811-p1-q0289｜5.5｜error_discrimination

**知识点：** kp-5.5 相乘性质

**题干：** 频域周期卷积只在 \([-\pi,\pi]\) 做普通卷积且不考虑绕回，会造成什么？

- A. 漏掉跨越区间边界后按 \(2\pi\) 折回的贡献 ✅
- B. 只会多一个 \(2\pi\) 系数 · `MISSING_2PI`
- C. 只会改变相位符号 · `SIGN_ERROR`
- D. 结果自动变成CTFT · `CONFUSE_CT_DT`

**解析：** 正确：DTFT谱是周期函数，卷积必须包含周期延拓的重叠。错项把结构错误说成系数或符号问题。易错点：先周期延拓再卷积。

**来源：** 基于重点习题5.15（时域sinc平方对应频域周期卷积）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.15
- OPPENHEIM-2E-LIU-01｜习题5.15｜PDF 280｜印刷页 257｜题号 5.15

---

## scut811-p1-q0290｜5.6｜concept

**知识点：** kp-5.6 性质与基本变换对表

**题干：** 用DTFT变换对做快速检查时，哪条原则最可靠？

- A. 只检查分母次数 · `WRONG_COEFFICIENT_NORMALIZATION`
- B. 同时检查 \(2\pi\) 周期性、零频值和对称性 ✅
- C. 只检查公式长度 · `IGNORED_CONVERGENCE_CONDITION`
- D. 只检查是否含 \(2\pi\) · `MISSING_2PI`

**解析：** 正确：周期性、面积/求和值与对称性提供互相独立的快速校验。错项只看表面形式。易错点：一个表达式通过单项检查仍可能有符号错误。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0291｜5.6｜formula

**知识点：** kp-5.6 性质与基本变换对表

**题干：** 有限序列 \(x[n]=1,0\le n\le N-1\) 的零频DTFT值是多少？

- A. \(N-1\) · `WRONG_SUPPORT_INTERVAL`
- B. \(2\pi N\) · `MISSING_2PI`
- C. \(N\) ✅
- D. \(1\) · `MISS_SCALE_FACTOR`

**解析：** 正确：\(X(e^{j0})=\sum_nx[n]\)，共有N个1。错项漏样本数、端点计数或混入 \(2\pi\)。易错点：0到N-1包含N个整数点。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0292｜5.6｜formula

**知识点：** kp-5.6 性质与基本变换对表

**题干：** 对 \(a^nu[n],|a|<1\)，\(X(e^{j0})\) 是多少？

- A. \(1/(1+a)\) · `SIGN_ERROR`
- B. \(1/a\) · `WRONG_COEFFICIENT_NORMALIZATION`
- C. \(2\pi/(1-a)\) · `MISSING_2PI`
- D. \(1/(1-a)\) ✅

**解析：** 正确：在 \(\omega=0\) 代入几何和，亦等于序列总和。错项符号、结构或归一化错误。易错点：零频检查可发现指数符号和系数问题。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0293｜5.6｜transform_pair

**知识点：** kp-5.6 性质与基本变换对表

**题干：** 下列哪一项是正确的有限矩形序列变换对？

- A. \(u[n]-u[n-N]\leftrightarrow\sum_{n=0}^{N-1}e^{-j\omega n}\) ✅
- B. \(u[n]-u[n-N]\leftrightarrow Ne^{-j\omega N}\) · `MISS_SCALE_FACTOR`
- C. \(u[n]-u[n-N]\leftrightarrow1/(1-e^{-j\omega})\) · `WRONG_SUPPORT_INTERVAL`
- D. \(u[n]-u[n-N]\leftrightarrow2\pi\delta(\omega)\) · `CONFUSE_IMPULSE_STEP`

**解析：** 正确：两个阶跃之差仅保留0到N-1，DTFT是有限几何和。错项误作单项、无限阶跃或常数序列。易错点：有限和在零频的极限是N。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0294｜5.6｜transform_pair

**知识点：** kp-5.6 性质与基本变换对表

**题干：** 左边序列 \(-a^nu[-n-1],|a|>1\) 的DTFT是哪一项？

- A. \(-1/(1-ae^{-j\omega})\) · `MISS_SCALE_FACTOR`
- B. \(1/(1-ae^{-j\omega})\) ✅
- C. \(1/(1-ae^{j\omega})\) · `SIGN_ERROR`
- D. \(1/(a+j\omega)\) · `CONFUSE_CT_DT`

**解析：** 正确：在相应收敛条件下，左边序列与该代数频率表达式配对。错项写反指数、混入CTFT或保留错误负号。易错点：相同代数式可因收敛区域对应不同序列。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0295｜5.6｜transform_pair

**知识点：** kp-5.6 性质与基本变换对表

**题干：** \(\delta[n]+\delta[n-1]\) 的DTFT是什么？

- A. \(2\delta(\omega)\) · `CONFUSE_CT_DT`
- B. \(e^{-j2\omega}\) · `WRONG_SHIFT_DIRECTION`
- C. \(1+e^{-j\omega}\) ✅
- D. \(1+e^{j\omega}\) · `WRONG_SHIFT_DIRECTION`

**解析：** 正确：两个移位单位样值分别贡献1和 \(e^{-j\omega}\)。错项写反延时或把相加误合并。易错点：线性叠加后各项都要保留。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0296｜5.6｜transform_pair

**知识点：** kp-5.6 性质与基本变换对表

**题干：** \(\delta[n]-\delta[n-1]\) 的DTFT是什么？

- A. \(1-e^{j\omega}\) · `WRONG_SHIFT_DIRECTION`
- B. \(j\omega\) · `CONFUSE_CT_DT`
- C. \(1+e^{-j\omega}\) · `SIGN_ERROR`
- D. \(1-e^{-j\omega}\) ✅

**解析：** 正确：延时单位样值对应 \(e^{-j\omega}\)，相减保留负号。错项写反延时、混入连续微分或符号错误。易错点：它在零频处为0，符合差分器抑制直流。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0297｜5.6｜transform_pair

**知识点：** kp-5.6 性质与基本变换对表

**题干：** \(a^{|n|},|a|<1\) 的DTFT应具有什么特征？

- A. 实、偶、以 \(2\pi\) 为周期 ✅
- B. 纯虚、奇 · `IGNORED_CONJUGATE_SYMMETRY`
- C. 实、奇 · `IGNORED_CONJUGATE_SYMMETRY`
- D. 实、偶但不周期 · `WRONG_PERIOD`

**解析：** 正确：时域为实偶序列，因此频谱实偶；任何DTFT还必须 \(2\pi\) 周期。错项破坏对称性或周期性。易错点：先用结构判断再看具体分式。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0298｜5.6｜error_discrimination

**知识点：** kp-5.6 性质与基本变换对表

**题干：** 有限长N点全1序列的频谱公式在 \(\omega=0\) 给出0。最可能哪里错？

- A. DTFT在零频无定义 · `IGNORED_CONVERGENCE_CONDITION`
- B. 没有正确取 \(0/0\) 形式的极限，正确值应为N ✅
- C. 应在零频加一个冲激 · `CONFUSE_IMPULSE_STEP`
- D. 应把N改成 \(2\pi\) · `MISSING_2PI`

**解析：** 正确：正弦比在零频需取极限，等于样本总和N。错项误加冲激或否认定义。易错点：遇到可去奇点先回到有限和。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0299｜5.6｜error_discrimination

**知识点：** kp-5.6 性质与基本变换对表

**题干：** \(\delta[n-2]\) 的DTFT被写成 \(e^{j2\omega}\)。错误是什么？

- A. 应为 \(e^{-j\omega/2}\) · `WRONG_FREQUENCY_SCALE`
- B. 应为2 · `MISS_SCALE_FACTOR`
- C. 延时相位符号写反，应为 \(e^{-j2\omega}\) ✅
- D. 应为 \(2\pi\delta(\omega-2)\) · `CONFUSE_CT_DT`

**解析：** 正确：右移2点带负线性相位。错项混淆CTFT、尺度或幅度。易错点：单位样值移位对的幅度恒为1。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0300｜5.6｜error_discrimination

**知识点：** kp-5.6 性质与基本变换对表

**题干：** 某候选DTFT不是 \(2\pi\) 周期函数。能否对应普通离散时间序列？

- A. 能，只要序列有限长 · `WRONG_PERIOD`
- B. 能，只要序列为实数 · `IGNORED_CONJUGATE_SYMMETRY`
- C. 只有周期序列的DTFT才周期 · `WRONG_PERIOD`
- D. 不能；任何离散时间序列的DTFT都必须 \(2\pi\) 周期 ✅

**解析：** 正确：周期性来自整数n的指数核，与序列长度、实性无关。错项施加无关条件。易错点：这是判断DTFT表达式合法性的首要检查。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0301｜5.6｜error_discrimination

**知识点：** kp-5.6 性质与基本变换对表

**题干：** 把 \(a^nu[n]\) 的条件从 \(|a|<1\) 删除，会有什么风险？

- A. 几何级数可能不收敛，所写DTFT失去普通意义 ✅
- B. 只会改变频谱周期 · `WRONG_PERIOD`
- C. 只会多一个 \(2\pi\) · `MISSING_2PI`
- D. 只会使频谱变成偶函数 · `IGNORED_CONJUGATE_SYMMETRY`

**解析：** 正确：收敛条件是变换对的一部分。错项把收敛问题误作周期、系数或对称性。易错点：背变换对时同时记支撑和参数范围。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0302｜5.6｜error_discrimination

**知识点：** kp-5.6 性质与基本变换对表

**题干：** \(\delta[n]+\delta[n-1]\) 的频谱被合并成 \(2e^{-j\omega}\)。错在哪里？

- A. 应取模平方后相加 · `FORGOT_MAGNITUDE_SQUARED`
- B. 两个样值位置不同，相位因子不能直接合并 ✅
- C. 应对两个冲激卷积 · `CONFUSE_CONVOLUTION_MULTIPLICATION`
- D. 应加 \(2\pi\) 周期冲激 · `CONFUSE_CT_DT`

**解析：** 正确：正确结果为 \(1+e^{-j\omega}\)。错项忽略一个样值位于0。易错点：线性性质逐项变换后再做代数化简。

**来源：** 基于重点习题5.8（利用DTFT性质和基本对求逆变换；不是教材第5.8节）的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题列表｜PDF 4｜印刷页 —｜题号 5.8
- OPPENHEIM-2E-LIU-01｜习题5.8｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-q0303｜5.7｜concept

**知识点：** kp-5.7 对偶性

**题干：** DTFT对偶性与CTFT相比需要特别小心什么？

- A. 对偶后频谱不再周期 · `WRONG_PERIOD`
- B. 对偶只适用于因果序列 · `CAUSALITY_ERROR`
- C. 离散时间与连续周期频率的角色互换及周期冲激表示 ✅
- D. DTFT没有任何对偶关系 · `WRONG_DUALITY_FACTOR`

**解析：** 正确：DTFT两域类型不同，对偶表达需处理周期延拓与冲激。错项否认性质或加无关条件。易错点：不能逐字照搬CTFT对偶公式。

**来源：** 基于奥本海姆第二版第5.7节 对偶性的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第5.7节 对偶性｜PDF 273｜印刷页 250

---

## scut811-p1-q0304｜5.7｜error_discrimination

**知识点：** kp-5.7 对偶性

**题干：** 学生把CTFT对偶公式 \(X(jt)\leftrightarrow2\pi x(-\omega)\) 原样套到DTFT。核心风险是什么？

- A. 只漏了复共轭 · `IGNORED_CONJUGATE_SYMMETRY`
- B. 只漏了时间延迟 · `WRONG_SHIFT_DIRECTION`
- C. 只需把 \(2\pi\) 改成N · `WRONG_MOD_N`
- D. 忽略了DTFT频域 \(2\pi\) 周期且两域一个离散一个连续 ✅

**解析：** 正确：DTFT对偶需以周期序列/冲激列形式精确定义，不能照搬CTFT。错项把结构差异缩成单一符号。易错点：先确认两边自变量类型。

**来源：** 基于奥本海姆第二版第5.7节 对偶性的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第5.7节 对偶性｜PDF 273｜印刷页 250

---

## scut811-p1-q0305｜5.8｜concept

**知识点：** kp-5.8 差分方程表征系统

**题干：** 由常系数差分方程求离散LTI系统频率响应的标准步骤是什么？

- A. 令每个延时 \(x[n-k]\)、\(y[n-k]\) 分别乘 \(e^{-j\omega k}\)，再求 \(Y/X\) ✅
- B. 把每个延时替换为 \(j\omega\) · `CONFUSE_CT_DT`
- C. 只变换输入侧延时 · `OUTPUT_NOT_DIFFERENTIATED`
- D. 把所有延时项直接相加为1 · `WRONG_DELAY_FACTOR`

**解析：** 正确：DTFT时移性质把差分方程化为代数式，再取输出输入比。错项混入连续微分或漏变换项。易错点：正延时k对应负指数 \(e^{-j\omega k}\)。

**来源：** 基于奥本海姆第二版第5.8节 由线性常系数差分方程表征的系统的受控短题改写；答案与干扰项待人工复核。

**来源状态：** `needs_manual_check`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第5.8节 由线性常系数差分方程表征的系统｜PDF 276｜印刷页 253

---

## scut811-p1-sample-017｜5.6｜transform_pair

**知识点：** kp-5.6 性质与基本变换对表

**题干：** 当 \(|a|<1\) 时，序列 \(a^nu[n]\) 的DTFT是哪一个？

- A. \(\frac{1}{1-ae^{-j\omega}}\) ✅
- B. \(\frac{1}{1-ae^{j\omega}}\) · `SIGN_ERROR`
- C. \(\frac{1}{a-j\omega}\) · `CONFUSE_CT_DT`
- D. \(\frac{1}{1-ae^{-j2\pi\omega}}\) · `WRONG_FREQUENCY_SCALE`

**解析：** 正确：DTFT求和是几何级数 \(\sum_{n=0}^{\infty}(ae^{-j\omega})^n\)，在 \(|a|<1\) 时等于 \(1/(1-ae^{-j\omega})\)。错误项写反指数符号、混用CTFT形式，或在数字角频率中重复加入 \(2\pi\)。易错点：DTFT对 \(\omega\) 天然具有 \(2\pi\) 周期。

**来源：** 教材第5章基本DTFT变换对；重点习题5.8要求借助性质与基本对求逆变换。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- OPPENHEIM-2E-LIU-01｜第5章习题5.46明确列出的基本变换对｜PDF 289｜印刷页 266｜题号 5.46
- OPPENHEIM-2E-LIU-01｜第5章重点习题5.8引用表5.1与表5.2｜PDF 279｜印刷页 256｜题号 5.8

---

## scut811-p1-sample-018｜5.3｜error_discrimination

**知识点：** kp-5.3 DTFT性质

**题干：** 对任意序列的DTFT \(X(e^{j\omega})\)，下列哪个表达式必与它相等？

- A. \(X(e^{j(\omega+\pi)})\) · `MISSING_2PI`
- B. \(X(e^{j2\pi\omega})\) · `WRONG_FREQUENCY_SCALE`
- C. \(X(e^{j(\omega+2\pi)})\) ✅
- D. \(X(e^{-j\omega})\) · `SIGN_ERROR`

**解析：** 正确：\(e^{-j(\omega+2\pi)n}=e^{-j\omega n}\) 对所有整数 \(n\) 成立，因此DTFT以 \(2\pi\) 为周期。错误项误用 \(\pi\) 周期、把角频率再次乘 \(2\pi\)，或把频率反转当成恒等。易错点：周期性属于频率变量 \(\omega\)，周期是 \(2\pi\)。

**来源：** 重点习题5.24中的DTFT周期性判断，改写为等价频谱表达式辨析。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题清单｜PDF 4｜印刷页 —｜题号 5.24
- OPPENHEIM-2E-LIU-01｜第5章习题5.24第5项：判断DTFT周期性｜PDF 282｜印刷页 259｜题号 5.24

---

## scut811-p1-sample-019｜5.8｜formula

**知识点：** kp-5.8 差分方程表征系统

**题干：** 零初始条件下，LTI系统满足 \(y[n]-\frac12y[n-1]=x[n]\)。它的频率响应 \(H(e^{j\omega})\) 是哪一个？

- A. \(\frac{1}{1+\frac12e^{-j\omega}}\) · `SIGN_ERROR`
- B. \(\frac{1}{1-\frac12e^{-j\omega}}\) ✅
- C. \(1-\frac12e^{-j\omega}\)
- D. \(\frac{1}{j\omega-\frac12}\) · `CONFUSE_CT_DT`

**解析：** 正确：DTFT后有 \(Y(e^{j\omega})[1-\tfrac12e^{-j\omega}]=X(e^{j\omega})\)，所以 \(H=Y/X\) 为其倒数。错误项改错符号、忘记取输出输入之比，或混入连续时间频率形式。易错点：延迟一拍对应乘 \(e^{-j\omega}\)。

**来源：** 重点习题5.48的差分方程求频率响应基础关系，降阶改写为移动端短题。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题清单｜PDF 4｜印刷页 —｜题号 5.48
- OPPENHEIM-2E-LIU-01｜第5章习题5.48(a)，由差分方程求频率响应｜PDF 289｜印刷页 266｜题号 5.48

---

## scut811-p1-sample-020｜5.3｜concept

**知识点：** kp-5.3 DTFT性质

**题干：** 若 \(x[n]\) 为实序列，其DTFT为 \(X(e^{j\omega})\)。下列哪项一定成立？

- A. \(X(e^{j(\omega+\pi)})=X(e^{j\omega})\) · `MISSING_2PI`
- B. \(X(e^{j\omega})\) 一定是实函数
- C. \(X(e^{-j\omega})=X(e^{j\omega})\)
- D. \(X(e^{-j\omega})=X^*(e^{j\omega})\) ✅

**解析：** 正确：实序列的DTFT具有共轭对称性，负频率值等于正频率值的共轭。错误项把 \(2\pi\) 周期写成 \(\pi\)，或额外假设频谱为实函数、偶函数。易错点：只有实偶序列的频谱才必为实偶。

**来源：** 重点习题5.37的共轭、反转和实部相关DTFT性质，抽取实序列共轭对称。

**来源状态：** `verified`；**审题状态：** `reviewed`

**Citations：**

- SCUT811-KEY-EXERCISE-LIST-01｜第5章重点课后题清单｜PDF 4｜印刷页 —｜题号 5.37
- OPPENHEIM-2E-LIU-01｜第5章习题5.37｜PDF 287｜印刷页 264｜题号 5.37

---
