# 20道真实样题人工审题稿

> 当前文件只列出 draft 内容。不得据此写入 verified/ 或修改 release.json。

- 总数：20
- 章节：1章 3题 / 2章 4题 / 3章 4题 / 4章 5题 / 5章 4题
- 题型：concept 4题 / formula 5题 / transform_pair 5题 / error_discrimination 6题
- 正确选项分布：A/B/C/D = 5/5/5/5

## 1. scut811-p1-sample-001

- 章节：第1章 / 1.1（蓝图 1.1）
- 题型：concept
- 知识点：连续离散信号与能量功率（kp-1.1）
- family：scut811-p1-sample-001
- 来源核验：verified
- Question审核：draft

**题干**

连续时间信号 \(x(t)=e^{-2t}u(t)\) 的能量 \(E\) 与平均功率 \(P\) 分别为哪一组？

**选项与机器错误标签**

- A. \(E=\frac14,\ P=0\) **（正确）**  
  error_tag: null
- B. \(E=\frac12,\ P=0\)  
  error_tag: MISS_SCALE_FACTOR
- C. \(E=\infty,\ P=\frac14\)  
  error_tag: null
- D. \(E=0,\ P=\frac14\)  
  error_tag: null

**短解析**

正确：\(E=\int_0^\infty e^{-4t}dt=1/4\)，有限能量信号的平均功率为0。错误项的核心是忘记先取模平方，或把能量与功率混淆。易错点：指数衰减率在 \(|x(t)|^2\) 中加倍。

**来源说明**

重点习题1.3的能量/平均功率判断模型，改写为短选择题。

- SCUT811-KEY-EXERCISE-LIST-01：第1章重点课后题清单；PDF页 4；印刷页 —；题号 1.3
- OPPENHEIM-2E-LIU-01：第1章习题1.3；PDF页 60；印刷页 37；题号 1.3

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 2. scut811-p1-sample-002

- 章节：第1章 / 1.6（蓝图 1.5-1.6）
- 题型：error_discrimination
- 知识点：系统与基本系统性质（kp-1.5-1.6）
- family：scut811-p1-sample-002
- 来源核验：verified
- Question审核：draft

**题干**

系统 \(y(t)=x(\sin t)\) 的性质判断正确的是哪一项？

**选项与机器错误标签**

- A. 线性、时不变、因果  
  error_tag: WRONG_SHIFT_DIRECTION
- B. 线性、时变、非因果 **（正确）**  
  error_tag: null
- C. 非线性、时变、非因果  
  error_tag: null
- D. 线性、时变、因果  
  error_tag: null

**短解析**

正确：取样自变量的映射不破坏叠加性，但平移输入不能只让输出平移，所以系统时变；某些 \(t\) 下 \(\sin t>t\)，会用到未来输入，因此非因果。错误项常把“自变量含非线性函数”误判成非线性系统。易错点：系统线性看输入幅度的叠加，不看时间轴是否被非线性变换。

**来源说明**

重点习题1.17及清单追加的时变判断，改写为三性质辨析。

- SCUT811-KEY-EXERCISE-LIST-01：第1章重点课后题清单，1.17附“加一个时变判断”；PDF页 4；印刷页 —；题号 1.17
- OPPENHEIM-2E-LIU-01：第1章习题1.17；PDF页 61；印刷页 38；题号 1.17

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 3. scut811-p1-sample-003

- 章节：第1章 / 1.4（蓝图 1.4）
- 题型：formula
- 知识点：单位冲激与单位阶跃（kp-1.4）
- family：scut811-p1-sample-003
- 来源核验：verified
- Question审核：draft

**题干**

若 \(x(t)=\delta(t+2)-\delta(t-2)\)，则 \(y(t)=\int_{-\infty}^{t}x(\tau)d\tau\) 等于什么？

**选项与机器错误标签**

- A. \(u(t-2)-u(t+2)\)  
  error_tag: WRONG_SHIFT_DIRECTION
- B. \(u(t+2)+u(t-2)\)  
  error_tag: SIGN_ERROR
- C. \(u(t+2)-u(t-2)\) **（正确）**  
  error_tag: null
- D. \(\delta(t+2)-\delta(t-2)\)  
  error_tag: null

**短解析**

正确：从负无穷积分把每个冲激变成同位置、同系数的阶跃，所以得到 \(u(t+2)-u(t-2)\)。错误项主要混淆平移正负号、冲激系数符号或忘记积分。易错点：\(\delta(t-t_0)\) 积分为 \(u(t-t_0)\)。

**来源说明**

重点习题1.13的冲激积分关系，压缩为一步判断题。

- SCUT811-KEY-EXERCISE-LIST-01：第1章重点课后题清单；PDF页 4；印刷页 —；题号 1.13
- OPPENHEIM-2E-LIU-01：第1章习题1.13；PDF页 61；印刷页 38；题号 1.13

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 4. scut811-p1-sample-004

- 章节：第2章 / 2.1（蓝图 2.1）
- 题型：formula
- 知识点：离散时间LTI与卷积和（kp-2.1）
- family：scut811-p1-sample-004
- 来源核验：verified
- Question审核：draft

**题干**

离散时间卷积 \(y[n]=x[n]*h[n]\) 的定义式是哪一个？

**选项与机器错误标签**

- A. \(\displaystyle y[n]=\sum_{k=-\infty}^{\infty}x[k]h[k-n]\)  
  error_tag: WRONG_SHIFT_DIRECTION
- B. \(\displaystyle y(t)=\int_{-\infty}^{\infty}x(\tau)h(t-\tau)d\tau\)  
  error_tag: CONFUSE_CT_DT
- C. \(\displaystyle y[n]=\sum_{k=-\infty}^{\infty}x[n-k]h[n-k]\)  
  error_tag: null
- D. \(\displaystyle y[n]=\sum_{k=-\infty}^{\infty}x[k]h[n-k]\) **（正确）**  
  error_tag: null

**短解析**

正确：卷积和固定一个序列为 \(x[k]\)，另一个写成翻转并移位后的 \(h[n-k]\)。错误项分别把移位方向写反、混入连续时间积分，或让两个序列同时随 \(n-k\) 变化。易错点：求和变量是 \(k\)，输出变量是 \(n\)。

**来源说明**

重点习题2.4的有限序列卷积模型，用于检验卷积和定义。

- SCUT811-KEY-EXERCISE-LIST-01：第2章重点课后题清单；PDF页 4；印刷页 —；题号 2.4
- OPPENHEIM-2E-LIU-01：第2章习题2.4；PDF页 110；印刷页 87；题号 2.4

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 5. scut811-p1-sample-005

- 章节：第2章 / 2.2（蓝图 2.2）
- 题型：error_discrimination
- 知识点：连续时间LTI与卷积积分（kp-2.2）
- family：scut811-p1-sample-005
- 来源核验：verified
- Question审核：draft

**题干**

图解卷积时，把 \(h(t-\tau)\) 看成变量 \(\tau\) 的函数。由 \(h(\tau)\) 得到它的正确操作顺序是什么？

**选项与机器错误标签**

- A. 先关于原点翻转成 \(h(-\tau)\)，再向右平移 \(t\) **（正确）**  
  error_tag: null
- B. 不翻转，直接把 \(h(\tau)\) 向右平移 \(t\)  
  error_tag: WRONG_SHIFT_DIRECTION
- C. 先翻转成 \(h(-\tau)\)，再向左平移 \(t\)  
  error_tag: WRONG_SHIFT_DIRECTION
- D. 先把 \(h(\tau)\) 向右平移 \(t\)，再对变量 \(t\) 翻转  
  error_tag: CONFUSE_CT_DT

**短解析**

正确：\(h(t-\tau)=h[-(\tau-t)]\)，因此相对于 \(\tau\) 是先翻转，再向右移动 \(t\)。错误项遗漏翻转、把平移方向写反，或混淆滑动变量。易错点：积分时 \(t\) 是参数，\(\tau\) 才是横轴变量。

**来源说明**

重点习题2.16的卷积时移、反转和支撑辨析，改写为图解卷积操作题。

- SCUT811-KEY-EXERCISE-LIST-01：第2章重点课后题清单；PDF页 4；印刷页 —；题号 2.16
- OPPENHEIM-2E-LIU-01：第2章习题2.16；PDF页 111；印刷页 88；题号 2.16

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 6. scut811-p1-sample-006

- 章节：第2章 / 2.3（蓝图 2.3）
- 题型：concept
- 知识点：LTI系统性质（kp-2.3）
- family：scut811-p1-sample-006
- 来源核验：verified
- Question审核：draft

**题干**

对连续时间LTI系统，已知 \(x(t)\to y(t)\)。下列哪组输入输出关系必然成立？

**选项与机器错误标签**

- A. \(x(t-t_0)\to y(t+t_0)\)  
  error_tag: WRONG_SHIFT_DIRECTION
- B. \(\frac{dx(t)}{dt}\to y(t)\)  
  error_tag: null
- C. \(\frac{dx(t)}{dt}\to\frac{dy(t)}{dt}\) **（正确）**  
  error_tag: null
- D. \(x(at)\to\frac{1}{|a|}y(at)\)  
  error_tag: MISS_SCALE_FACTOR

**短解析**

正确：微分可与LTI卷积运算交换，所以输入的导数对应输出的导数。错误项把时移方向写反、漏掉输出微分，或把傅里叶变换的尺度因子误套到系统响应。易错点：LTI只保证平移和线性组合，通常不保证时间尺度变换可交换。

**来源说明**

重点习题2.45的输入导数与输出导数关系，改写为性质判断。

- SCUT811-KEY-EXERCISE-LIST-01：第2章重点课后题清单；PDF页 4；印刷页 —；题号 2.45
- OPPENHEIM-2E-LIU-01：第2章习题2.45(a)-(b)；PDF页 117；印刷页 94；题号 2.45

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 7. scut811-p1-sample-007

- 章节：第2章 / 2.3（蓝图 2.3）
- 题型：error_discrimination
- 知识点：LTI系统性质（kp-2.3）
- family：scut811-p1-sample-007
- 来源核验：verified
- Question审核：draft

**题干**

连续时间LTI系统的单位阶跃响应为 \(s(t)\)，单位冲激响应为 \(h(t)\)。两者的正确关系是哪一个？

**选项与机器错误标签**

- A. \(s(t)=\frac{dh(t)}{dt}\)  
  error_tag: null
- B. \(h(t)=\frac{ds(t)}{dt}\) **（正确）**  
  error_tag: null
- C. \(h(t)=\int_{-\infty}^{t}s(\tau)d\tau\)  
  error_tag: null
- D. \(h(t)=s(t)\)  
  error_tag: null

**短解析**

正确：\(s(t)=u(t)*h(t)\)，对时间求导并用 \(du/dt=\delta\)，得到 \(ds/dt=h\)。错误项颠倒微分关系、重复积分或直接把两种响应等同。易错点：阶跃响应是冲激响应从负无穷开始的累积。

**来源说明**

重点习题2.45的阶跃响应、冲激响应及微分关系，改写为快速辨析。

- SCUT811-KEY-EXERCISE-LIST-01：第2章重点课后题清单；PDF页 4；印刷页 —；题号 2.45
- OPPENHEIM-2E-LIU-01：第2章习题2.45(b)-(d)；PDF页 117；印刷页 94；题号 2.45

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 8. scut811-p1-sample-008

- 章节：第3章 / 3.3（蓝图 3.3）
- 题型：concept
- 知识点：CTFS表示与系数（kp-3.3）
- family：scut811-p1-sample-008
- 来源核验：verified
- Question审核：draft

**题干**

周期为 \(T_0\) 的连续时间周期信号，其基波频率 \(f_0\) 与基波角频率 \(\omega_0\) 的关系正确的是哪一个？

**选项与机器错误标签**

- A. \(f_0=\frac{2\pi}{T_0},\ \omega_0=\frac1{T_0}\)  
  error_tag: WRONG_FREQUENCY_SCALE
- B. \(\omega_0=\frac{f_0}{2\pi}\)  
  error_tag: MISSING_2PI
- C. \(f_0=\omega_0=\frac1{T_0}\)  
  error_tag: MISSING_2PI
- D. \(f_0=\frac1{T_0},\ \omega_0=2\pi f_0=\frac{2\pi}{T_0}\) **（正确）**  
  error_tag: null

**短解析**

正确：普通频率以周/秒计，\(f_0=1/T_0\)；角频率多出每周 \(2\pi\) 弧度，因此 \(\omega_0=2\pi f_0\)。错误项都在交换或漏掉 \(2\pi\)。易错点：指数型CTFS写的是 \(e^{jk\omega_0t}\)。

**来源说明**

重点习题3.3的基波频率和CTFS系数模型，拆出f0与omega0辨析。

- SCUT811-KEY-EXERCISE-LIST-01：第3章重点课后题清单；PDF页 4；印刷页 —；题号 3.3
- OPPENHEIM-2E-LIU-01：第3章习题3.3；PDF页 183；印刷页 160；题号 3.3

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 9. scut811-p1-sample-009

- 章节：第3章 / 3.3（蓝图 3.3）
- 题型：transform_pair
- 知识点：CTFS表示与系数（kp-3.3）
- family：scut811-p1-sample-009
- 来源核验：verified
- Question审核：draft

**题干**

若 \(x(t)=\cos(3\omega_0t)\)，在 \(x(t)=\sum_{k=-\infty}^{\infty}a_ke^{jk\omega_0t}\) 中，非零系数是哪一组？

**选项与机器错误标签**

- A. \(a_3=a_{-3}=\frac12\) **（正确）**  
  error_tag: null
- B. \(a_3=1\)，其余为0  
  error_tag: WRONG_HARMONIC_INDEX
- C. \(a_{-3}=1\)，其余为0  
  error_tag: SIGN_ERROR
- D. \(a_1=a_{-1}=\frac12\)  
  error_tag: WRONG_HARMONIC_INDEX

**短解析**

正确：欧拉公式给出 \(\cos(3\omega_0t)=\tfrac12e^{j3\omega_0t}+\tfrac12e^{-j3\omega_0t}\)。错误项漏掉负频率项、漏掉二分之一或把谐波下标写成1。易错点：下标由角频率与 \(\omega_0\) 的倍数决定。

**来源说明**

重点习题3.3的谐波组合与指数型CTFS系数模型，控制数值后改写。

- SCUT811-KEY-EXERCISE-LIST-01：第3章重点课后题清单；PDF页 4；印刷页 —；题号 3.3
- OPPENHEIM-2E-LIU-01：第3章习题3.3；PDF页 183；印刷页 160；题号 3.3

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 10. scut811-p1-sample-010

- 章节：第3章 / 3.7（蓝图 3.7）
- 题型：error_discrimination
- 知识点：DTFS性质（kp-3.7）
- family：scut811-p1-sample-010
- 来源核验：verified
- Question审核：draft

**题干**

实序列 \(x[n]\) 的周期为 \(N=7\)，DTFS系数为 \(a_k\)。若 \(a_{16}=2j\)，则 \(a_{-2}\) 是多少？

**选项与机器错误标签**

- A. \(2j\)  
  error_tag: SIGN_ERROR
- B. \(-3j\)  
  error_tag: WRONG_MOD_N
- C. \(-2j\) **（正确）**  
  error_tag: null
- D. \(0\)  
  error_tag: WRONG_MOD_N

**短解析**

正确：DTFS系数按 \(N\) 周期，\(16\equiv2\pmod7\)，故 \(a_2=2j\)；实序列满足 \(a_{-2}=a_2^*=-2j\)。错误项忘记共轭、取错模下标或把负下标当成不存在。易错点：先模 \(N\)，再用共轭对称。

**来源说明**

重点习题3.10的DTFS系数周期性与实序列共轭对称，保留N=7并缩成一步判断。

- SCUT811-KEY-EXERCISE-LIST-01：第3章重点课后题清单；PDF页 4；印刷页 —；题号 3.10
- OPPENHEIM-2E-LIU-01：第3章习题3.10；PDF页 184；印刷页 161；题号 3.10

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 11. scut811-p1-sample-011

- 章节：第3章 / 3.8（蓝图 3.8）
- 题型：formula
- 知识点：FS与LTI系统（kp-3.8）
- family：scut811-p1-sample-011
- 来源核验：verified
- Question审核：draft

**题干**

周期输入 \(x(t)=\sum_{k=-\infty}^{\infty}a_ke^{jk\omega_0t}\) 通过频率响应为 \(H(j\omega)\) 的连续时间LTI系统。输出CTFS系数 \(b_k\) 是什么？

**选项与机器错误标签**

- A. \(b_k=a_kH(j\omega_0)\)  
  error_tag: WRONG_HARMONIC_INDEX
- B. \(b_k=a_kH(jk\omega_0)\) **（正确）**  
  error_tag: null
- C. \(b_k=a_kH(j\omega)\)  
  error_tag: WRONG_HARMONIC_INDEX
- D. \(b_k=a_kH(jk)\)  
  error_tag: WRONG_FREQUENCY_SCALE

**短解析**

正确：第 \(k\) 个谐波的角频率是 \(k\omega_0\)，复指数通过LTI系统时乘以该频率处的响应。错误项漏掉谐波下标、保留自由变量 \(\omega\)，或漏掉 \(\omega_0\)。易错点：应代入 \(H(jk\omega_0)\)，不是统一代入 \(H(j\omega_0)\)。

**来源说明**

重点习题3.13的周期输入经LTI系统谐波响应模型，抽取核心公式。

- SCUT811-KEY-EXERCISE-LIST-01：第3章重点课后题清单；PDF页 4；印刷页 —；题号 3.13
- OPPENHEIM-2E-LIU-01：第3章习题3.13；PDF页 184；印刷页 161；题号 3.13

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 12. scut811-p1-sample-012

- 章节：第4章 / 4.6（蓝图 4.6）
- 题型：transform_pair
- 知识点：性质与基本变换对表（kp-4.6）
- family：scut811-p1-sample-012
- 来源核验：verified
- Question审核：draft

**题干**

按 \(X(j\omega)=\int_{-\infty}^{\infty}x(t)e^{-j\omega t}dt\) 的约定，\(e^{-|t|}\) 的傅里叶变换是哪一个？

**选项与机器错误标签**

- A. \(\frac{1}{1+j\omega}\)  
  error_tag: null
- B. \(\frac{1}{1-j\omega}\)  
  error_tag: SIGN_ERROR
- C. \(\frac{2}{1+j\omega^2}\)  
  error_tag: SIGN_ERROR
- D. \(\frac{2}{1+\omega^2}\) **（正确）**  
  error_tag: null

**短解析**

正确：双边指数可分成正、负时间两段，两个单边变换相加得到 \(2/(1+\omega^2)\)。错误项把双边信号当成单边指数，或给实偶信号配了复数频谱。易错点：实偶时域信号的频谱应为实偶函数。

**来源说明**

重点习题4.12给出的双边指数基本变换对及性质应用。

- SCUT811-KEY-EXERCISE-LIST-01：第4章重点课后题清单；PDF页 4；印刷页 —；题号 4.12
- OPPENHEIM-2E-LIU-01：第4章习题4.12给出的变换对；PDF页 237；印刷页 214；题号 4.12

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 13. scut811-p1-sample-013

- 章节：第4章 / 4.3（蓝图 4.3）
- 题型：error_discrimination
- 知识点：CTFT性质（kp-4.3）
- family：scut811-p1-sample-013
- 来源核验：verified
- Question审核：draft

**题干**

已知 \(x(t)\leftrightarrow X(j\omega)\)。时移信号 \(x(t-t_0)\) 的傅里叶变换是哪一个？

**选项与机器错误标签**

- A. \(e^{-j\omega t_0}X(j\omega)\) **（正确）**  
  error_tag: null
- B. \(e^{j\omega t_0}X(j\omega)\)  
  error_tag: SIGN_ERROR
- C. \(X\bigl(j(\omega-t_0)\bigr)\)  
  error_tag: WRONG_SHIFT_DIRECTION
- D. \(e^{-jt_0}X(j\omega)\)  
  error_tag: WRONG_FREQUENCY_SCALE

**短解析**

正确：时域延迟 \(t_0\) 在频域乘上线性相位 \(e^{-j\omega t_0}\)。错误项把相位符号写反、误当成频移，或漏掉 \(\omega\)。易错点：\(x(t-t_0)\) 是右移，对应负号相位。

**来源说明**

重点习题4.29的线性相位、反转与时移关系，抽取时移符号辨析。

- SCUT811-KEY-EXERCISE-LIST-01：第4章重点课后题清单；PDF页 4；印刷页 —；题号 4.29
- OPPENHEIM-2E-LIU-01：第4章习题4.29；PDF页 241；印刷页 218；题号 4.29

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 14. scut811-p1-sample-014

- 章节：第4章 / 4.3（蓝图 4.3）
- 题型：formula
- 知识点：CTFT性质（kp-4.3）
- family：scut811-p1-sample-014
- 来源核验：verified
- Question审核：draft

**题干**

已知 \(x(t)\leftrightarrow X(j\omega)\)，且 \(a\neq0\)。\(x(at)\) 的傅里叶变换是哪一个？

**选项与机器错误标签**

- A. \(X(ja\omega)\)  
  error_tag: MISS_SCALE_FACTOR
- B. \(\frac1aX\left(j\frac{\omega}{a}\right)\)  
  error_tag: MISS_SCALE_FACTOR
- C. \(\frac1{|a|}X\left(j\frac{\omega}{a}\right)\) **（正确）**  
  error_tag: null
- D. \(|a|X(ja\omega)\)  
  error_tag: WRONG_FREQUENCY_SCALE

**短解析**

正确：变量代换给出幅度因子 \(1/|a|\)，频率轴按 \(\omega/a\) 反向缩放。错误项漏掉尺度因子、在 \(a<0\) 时丢失绝对值，或把频率缩放方向写反。易错点：必须是 \(1/|a|\)，不是 \(1/a\)。

**来源说明**

重点习题4.11的卷积与时间尺度变换模型，抽取CTFT尺度公式。

- SCUT811-KEY-EXERCISE-LIST-01：第4章重点课后题清单；PDF页 4；印刷页 —；题号 4.11
- OPPENHEIM-2E-LIU-01：第4章习题4.11；PDF页 237；印刷页 214；题号 4.11

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 15. scut811-p1-sample-015

- 章节：第4章 / 4.4（蓝图 4.4）
- 题型：transform_pair
- 知识点：卷积性质（kp-4.4）
- family：scut811-p1-sample-015
- 来源核验：verified
- Question审核：draft

**题干**

若 \(x(t)\leftrightarrow X(j\omega)\)、\(h(t)\leftrightarrow H(j\omega)\)，则 \(y(t)=x(t)*h(t)\) 对应的 \(Y(j\omega)\) 是什么？

**选项与机器错误标签**

- A. \(\frac1{2\pi}X(j\omega)H(j\omega)\)  
  error_tag: MISS_SCALE_FACTOR
- B. \(X(j\omega)H(j\omega)\) **（正确）**  
  error_tag: null
- C. \(X(j\omega)*H(j\omega)\)  
  error_tag: null
- D. \(\frac1{2\pi}[X(j\omega)*H(j\omega)]\)  
  error_tag: null

**短解析**

正确：时域卷积对应频域直接相乘，不带 \(1/(2\pi)\)。错误项把相乘性质的频域卷积套进来，或附加错误常数因子。易错点：在本书约定下，时域相乘才对应 \(\frac1{2\pi}\) 倍的频域卷积。

**来源说明**

重点习题4.11直接给出时域卷积模型，用于卷积定理快速配对。

- SCUT811-KEY-EXERCISE-LIST-01：第4章重点课后题清单；PDF页 4；印刷页 —；题号 4.11
- OPPENHEIM-2E-LIU-01：第4章习题4.11；PDF页 237；印刷页 214；题号 4.11

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 16. scut811-p1-sample-016

- 章节：第4章 / 4.5（蓝图 4.5）
- 题型：transform_pair
- 知识点：相乘性质（kp-4.5）
- family：scut811-p1-sample-016
- 来源核验：verified
- Question审核：draft

**题干**

若 \(g(t)=x(t)y(t)\)，且 \(x(t)\leftrightarrow X(j\omega)\)、\(y(t)\leftrightarrow Y(j\omega)\)，则 \(G(j\omega)\) 是什么？

**选项与机器错误标签**

- A. \(X(j\omega)Y(j\omega)\)  
  error_tag: null
- B. \(2\pi[X(j\omega)*Y(j\omega)]\)  
  error_tag: MISS_SCALE_FACTOR
- C. \(X(j\omega)*Y(j\omega)\)  
  error_tag: MISSING_2PI
- D. \(\frac1{2\pi}[X(j\omega)*Y(j\omega)]\) **（正确）**  
  error_tag: null

**短解析**

正确：按当前CTFT正逆变换约定，时域相乘对应 \(G=(1/2\pi)(X*Y)\)。错误项把它误写成频域相乘，或漏掉、倒置 \(2\pi\) 因子。易错点：常数因子取决于傅里叶变换约定，本题采用教材约定。

**来源说明**

教材第4章习题4.41推导的连续时间傅里叶变换相乘性质。

- OPPENHEIM-2E-LIU-01：第4章习题4.41，相乘性质推导；PDF页 244；印刷页 221；题号 4.41

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 17. scut811-p1-sample-017

- 章节：第5章 / 5.6（蓝图 5.6）
- 题型：transform_pair
- 知识点：性质与基本变换对表（kp-5.6）
- family：scut811-p1-sample-017
- 来源核验：verified
- Question审核：draft

**题干**

当 \(|a|<1\) 时，序列 \(a^nu[n]\) 的DTFT是哪一个？

**选项与机器错误标签**

- A. \(\frac{1}{1-ae^{-j\omega}}\) **（正确）**  
  error_tag: null
- B. \(\frac{1}{1-ae^{j\omega}}\)  
  error_tag: SIGN_ERROR
- C. \(\frac{1}{a-j\omega}\)  
  error_tag: CONFUSE_CT_DT
- D. \(\frac{1}{1-ae^{-j2\pi\omega}}\)  
  error_tag: WRONG_FREQUENCY_SCALE

**短解析**

正确：DTFT求和是几何级数 \(\sum_{n=0}^{\infty}(ae^{-j\omega})^n\)，在 \(|a|<1\) 时等于 \(1/(1-ae^{-j\omega})\)。错误项写反指数符号、混用CTFT形式，或在数字角频率中重复加入 \(2\pi\)。易错点：DTFT对 \(\omega\) 天然具有 \(2\pi\) 周期。

**来源说明**

教材第5章基本DTFT变换对；重点习题5.8要求借助性质与基本对求逆变换。

- OPPENHEIM-2E-LIU-01：第5章习题5.46明确列出的基本变换对；PDF页 289；印刷页 266；题号 5.46
- OPPENHEIM-2E-LIU-01：第5章重点习题5.8引用表5.1与表5.2；PDF页 279；印刷页 256；题号 5.8

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 18. scut811-p1-sample-018

- 章节：第5章 / 5.3（蓝图 5.3）
- 题型：error_discrimination
- 知识点：DTFT性质（kp-5.3）
- family：scut811-p1-sample-018
- 来源核验：verified
- Question审核：draft

**题干**

对任意序列的DTFT \(X(e^{j\omega})\)，下列哪个表达式必与它相等？

**选项与机器错误标签**

- A. \(X(e^{j(\omega+\pi)})\)  
  error_tag: MISSING_2PI
- B. \(X(e^{j2\pi\omega})\)  
  error_tag: WRONG_FREQUENCY_SCALE
- C. \(X(e^{j(\omega+2\pi)})\) **（正确）**  
  error_tag: null
- D. \(X(e^{-j\omega})\)  
  error_tag: SIGN_ERROR

**短解析**

正确：\(e^{-j(\omega+2\pi)n}=e^{-j\omega n}\) 对所有整数 \(n\) 成立，因此DTFT以 \(2\pi\) 为周期。错误项误用 \(\pi\) 周期、把角频率再次乘 \(2\pi\)，或把频率反转当成恒等。易错点：周期性属于频率变量 \(\omega\)，周期是 \(2\pi\)。

**来源说明**

重点习题5.24中的DTFT周期性判断，改写为等价频谱表达式辨析。

- SCUT811-KEY-EXERCISE-LIST-01：第5章重点课后题清单；PDF页 4；印刷页 —；题号 5.24
- OPPENHEIM-2E-LIU-01：第5章习题5.24第5项：判断DTFT周期性；PDF页 282；印刷页 259；题号 5.24

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 19. scut811-p1-sample-019

- 章节：第5章 / 5.8（蓝图 5.8）
- 题型：formula
- 知识点：差分方程表征系统（kp-5.8）
- family：scut811-p1-sample-019
- 来源核验：verified
- Question审核：draft

**题干**

零初始条件下，LTI系统满足 \(y[n]-\frac12y[n-1]=x[n]\)。它的频率响应 \(H(e^{j\omega})\) 是哪一个？

**选项与机器错误标签**

- A. \(\frac{1}{1+\frac12e^{-j\omega}}\)  
  error_tag: SIGN_ERROR
- B. \(\frac{1}{1-\frac12e^{-j\omega}}\) **（正确）**  
  error_tag: null
- C. \(1-\frac12e^{-j\omega}\)  
  error_tag: null
- D. \(\frac{1}{j\omega-\frac12}\)  
  error_tag: CONFUSE_CT_DT

**短解析**

正确：DTFT后有 \(Y(e^{j\omega})[1-\tfrac12e^{-j\omega}]=X(e^{j\omega})\)，所以 \(H=Y/X\) 为其倒数。错误项改错符号、忘记取输出输入之比，或混入连续时间频率形式。易错点：延迟一拍对应乘 \(e^{-j\omega}\)。

**来源说明**

重点习题5.48的差分方程求频率响应基础关系，降阶改写为移动端短题。

- SCUT811-KEY-EXERCISE-LIST-01：第5章重点课后题清单；PDF页 4；印刷页 —；题号 5.48
- OPPENHEIM-2E-LIU-01：第5章习题5.48(a)，由差分方程求频率响应；PDF页 289；印刷页 266；题号 5.48

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审

---

## 20. scut811-p1-sample-020

- 章节：第5章 / 5.3（蓝图 5.3）
- 题型：concept
- 知识点：DTFT性质（kp-5.3）
- family：scut811-p1-sample-020
- 来源核验：verified
- Question审核：draft

**题干**

若 \(x[n]\) 为实序列，其DTFT为 \(X(e^{j\omega})\)。下列哪项一定成立？

**选项与机器错误标签**

- A. \(X(e^{j(\omega+\pi)})=X(e^{j\omega})\)  
  error_tag: MISSING_2PI
- B. \(X(e^{j\omega})\) 一定是实函数  
  error_tag: null
- C. \(X(e^{-j\omega})=X(e^{j\omega})\)  
  error_tag: null
- D. \(X(e^{-j\omega})=X^*(e^{j\omega})\) **（正确）**  
  error_tag: null

**短解析**

正确：实序列的DTFT具有共轭对称性，负频率值等于正频率值的共轭。错误项把 \(2\pi\) 周期写成 \(\pi\)，或额外假设频谱为实函数、偶函数。易错点：只有实偶序列的频谱才必为实偶。

**来源说明**

重点习题5.37的共轭、反转和实部相关DTFT性质，抽取实序列共轭对称。

- SCUT811-KEY-EXERCISE-LIST-01：第5章重点课后题清单；PDF页 4；印刷页 —；题号 5.37
- OPPENHEIM-2E-LIU-01：第5章习题5.37；PDF页 287；印刷页 264；题号 5.37

**人工审题记录**

- 知识正确性：待审
- 干扰项质量：待审
- 来源匹配：待审
- 移动端复习价值：待审
