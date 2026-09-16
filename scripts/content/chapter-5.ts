import type { ChapterCatalog, DraftSpec, WrongOption } from './phase1-types.ts';
import type { QuestionSubtype } from '../../src/domain/models.ts';
import { choose, wrong } from './phase1-types.ts';

const q=(blueprint_section:string,subtype:QuestionSubtype,stem:string,correct:string,wrongs:[WrongOption,WrongOption,WrongOption],explanation:string):DraftSpec=>({blueprint_section,subtype,stem,correct,wrong:wrongs,explanation});
const catalog:Record<string,DraftSpec[]>={
  '5.1|concept':[
    q('5.1','concept','DTFT \\(X(e^{j\\omega})\\) 关于 \\(\\omega\\) 的基本周期是多少？','\\(2\\pi\\)',[wrong('\\(\\pi\\)','WRONG_PERIOD'),wrong('序列长度N','WRONG_MOD_N'),wrong('它通常不周期','CONFUSE_CT_DT')],'正确：指数核对 \\(\\omega+2\\pi\\) 不变，所以DTFT以 \\(2\\pi\\) 为周期。错项混淆半周期、DTFS模N或CTFT。易错点：任何离散时间序列的DTFT都具有此周期性。'),
    q('5.1','concept','序列绝对可和 \\(\\sum_n|x[n]|<\\infty\\) 对DTFT意味着什么？','它是DTFT一致存在的一个充分条件',[wrong('它是DTFT存在的必要条件','IGNORED_CONVERGENCE_CONDITION'),wrong('它说明序列一定周期','WRONG_PERIOD'),wrong('它说明序列能量必为无穷','CONFUSE_ENERGY_POWER')],'正确：绝对可和保证DTFT收敛，但广义意义下还有其他序列。错项把充分条件说成必要或混淆周期、能量。易错点：常数序列需冲激列形式的广义DTFT。')
  ],
  '5.1|formula':[
    q('5.1','formula','DTFT分析公式是哪一个？','\\(X(e^{j\\omega})=\\sum_{n=-\\infty}^{\\infty}x[n]e^{-j\\omega n}\\)',[wrong('\\(X(j\\omega)=\\int x(t)e^{-j\\omega t}dt\\)','CONFUSE_CT_DT'),wrong('\\(X(e^{j\\omega})=\\sum_nx[n]e^{j\\omega n}\\)','SIGN_ERROR'),wrong('\\(X[k]=\\frac1N\\sum_nx[n]e^{-jk\\omega_0n}\\)','CONFUSE_CT_DT')],'正确：DTFT对整数n求和并使用负指数核。错项混入CTFT、写反符号或混入DTFS。易错点：DTFT频率连续但频谱周期。'),
    q('5.1','formula','DTFT合成公式是哪一个？','\\(x[n]=\\frac1{2\\pi}\\int_{-\\pi}^{\\pi}X(e^{j\\omega})e^{j\\omega n}d\\omega\\)',[wrong('\\(x[n]=\\int_{-\\infty}^{\\infty}X(e^{j\\omega})e^{-j\\omega n}d\\omega\\)','SIGN_ERROR'),wrong('\\(x[n]=\\frac1N\\sum_kX[k]e^{jk\\omega_0n}\\)','CONFUSE_CT_DT'),wrong('\\(x[n]=2\\pi\\int_{-\\pi}^{\\pi}X(e^{j\\omega})e^{j\\omega n}d\\omega\\)','MISSING_2PI')],'正确：在任意长为 \\(2\\pi\\) 的区间积分，并带 \\(1/2\\pi\\) 与正指数核。错项混淆DTFS或归一化。易错点：积分区间不必固定为 \\([-\\pi,\\pi]\\)，长度正确即可。'),
    q('5.1','formula','对 \\(x[n]=(-a)^n u[n]\\)，\\(|a|<1\\)，其DTFT是什么？','\\(1/(1+ae^{-j\\omega})\\)',[wrong('\\(1/(1-ae^{-j\\omega})\\)','SIGN_ERROR'),wrong('\\(1/(1+ae^{j\\omega})\\)','SIGN_ERROR'),wrong('\\(1/(a+e^{-j\\omega})\\)','WRONG_COEFFICIENT_NORMALIZATION')],'正确：几何级数的公比为 \\(-ae^{-j\\omega}\\)，故和为 \\(1/(1+ae^{-j\\omega})\\)。错项漏负号、写反频率指数或交换常数位置。易错点：底数中的负号会把分母的减号变成加号。')
  ],
  '5.1|transform_pair':[
    q('5.1','transform_pair','下列哪一项是正确DTFT变换对？','\\(\\delta[n]\\leftrightarrow1\\)',[wrong('\\(\\delta[n]\\leftrightarrow2\\pi\\delta(\\omega)\\)','CONFUSE_CT_DT'),wrong('\\(1\\leftrightarrow1\\)','WRONG_PERIOD'),wrong('\\(u[n]\\leftrightarrow1\\)','CONFUSE_IMPULSE_STEP')],'正确：单位样值只保留n=0项，DTFT为1。错项混入CTFT冲激或阶跃。易错点：频域表达仍按 \\(2\\pi\\) 周期理解。'),
    q('5.1','transform_pair','移位单位样值 \\(\\delta[n-n_0]\\) 的DTFT是什么？','\\(e^{-j\\omega n_0}\\)',[wrong('\\(e^{j\\omega n_0}\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(2\\pi\\delta(\\omega-n_0)\\)','CONFUSE_CT_DT'),wrong('\\(e^{-jn\\omega_0}\\)','WRONG_FREQUENCY_SCALE')],'正确：求和的抽样性质直接得到 \\(e^{-j\\omega n_0}\\)。错项写反时移相位或混淆变量。易错点：其幅度谱恒为1。'),
    q('5.1','transform_pair','\\(a^{n-1}u[n-1]\\)，\\(|a|<1\\)，对应的DTFT是哪一个？','\\(e^{-j\\omega}/(1-ae^{-j\\omega})\\)',[wrong('\\(1/(1-ae^{-j\\omega})\\)','WRONG_DELAY_FACTOR'),wrong('\\(e^{j\\omega}/(1-ae^{-j\\omega})\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(a/(1-ae^{-j\\omega})\\)','WRONG_COEFFICIENT_NORMALIZATION')],'正确：它是 \\(a^n u[n]\\) 右移1点，频谱乘 \\(e^{-j\\omega}\\)。错项漏延时因子、写反相位或误乘a。易错点：右移1点对应负指数相位。'),
    q('5.1','transform_pair','有限长矩形序列 \\(x[n]=1,0\\le n\\le N-1\\) 的DTFT是哪一项？','\\(e^{-j\\omega(N-1)/2}\\frac{\\sin(N\\omega/2)}{\\sin(\\omega/2)}\\)',[wrong('\\(\\sin(N\\omega)/\\sin\\omega\\)','WRONG_FREQUENCY_SCALE'),wrong('\\(e^{j\\omega(N-1)/2}\\frac{\\sin(N\\omega/2)}{\\sin(\\omega/2)}\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(N e^{-j\\omega N}\\)','MISS_SCALE_FACTOR')],'正确：有限几何和化为线性相位乘Dirichlet核。错项尺度、相位符号或频率依赖错误。易错点：零频极限必须为N。'),
    q('5.1','transform_pair','双边序列 \\(a^{|n|},|a|<1\\) 的DTFT是什么？','\\((1-a^2)/(1-2a\\cos\\omega+a^2)\\)',[wrong('\\(1/(1-ae^{-j\\omega})\\)','MISSING_TIME_REVERSAL'),wrong('\\((1+a^2)/(1-2a\\cos\\omega+a^2)\\)','SIGN_ERROR'),wrong('\\((1-a^2)/(1-2a\\sin\\omega+a^2)\\)','SIGN_ERROR')],'正确：左右两边几何级数相加得到实偶表达式。错项只保留右边或写错分子/余弦。易错点：实时域偶序列的DTFT应实偶。'),
    q('5.1','transform_pair','\\((-1)^n x[n]\\) 与 \\(x[n]\\leftrightarrow X(e^{j\\omega})\\) 的关系是哪一个？','\\((-1)^nx[n]\\leftrightarrow X(e^{j(\\omega-\\pi)})\\)',[wrong('\\(X(e^{j(\\omega+1)})\\)','WRONG_FREQUENCY_SCALE'),wrong('\\((-1)^nX(e^{j\\omega})\\)','CONFUSE_CT_DT'),wrong('\\(X(e^{-j\\omega})\\)','MISSING_TIME_REVERSAL')],'正确：\\((-1)^n=e^{j\\pi n}\\)，故频谱平移 \\(\\pi\\)。错项漏角频率单位或混淆反转。易错点：加减 \\(\\pi\\) 在 \\(2\\pi\\) 周期下等价。')
  ],
  '5.1|error_discrimination':[
    q('5.1','error_discrimination','学生认为DTFT只在 \\([-\\pi,\\pi]\\) 内定义。错在哪里？','DTFT对全部实数 \\(\\omega\\) 定义，并以 \\(2\\pi\\) 周期重复',[wrong('DTFT只在整数频率定义','CONFUSE_CT_DT'),wrong('DTFT周期为序列长度N','WRONG_MOD_N'),wrong('DTFT不具有周期性','WRONG_PERIOD')],'正确：\\([-\\pi,\\pi]\\) 只是常用的一个主值区间。错项混淆DTFS或否认周期性。易错点：区间端点以外由周期延拓确定。'),
    q('5.1','error_discrimination','学生把DTFT分析式写成对 \\(\\omega\\) 积分。核心错误是什么？','分析式应对离散时间下标n求和',[wrong('应对n积分','CONFUSE_CT_DT'),wrong('应只取n=0','WRONG_DC_COEFFICIENT'),wrong('应对频谱模平方求和','FORGOT_MAGNITUDE_SQUARED')],'正确：时域离散决定分析运算为求和，频率仍连续。错项继续混淆变量或能量。易错点：离散时间对应频域周期，而非频率离散。'),
    q('5.1','error_discrimination','\\(a^nu[n]\\) 的DTFT推导中未写 \\(|a|<1\\)。问题是什么？','忽略了几何级数收敛条件',[wrong('漏了 \\(2\\pi\\)','MISSING_2PI'),wrong('漏了时间反转','MISSING_TIME_REVERSAL'),wrong('漏了模平方','FORGOT_MAGNITUDE_SQUARED')],'正确：右边无限几何和只有在 \\(|a|<1\\) 时按普通意义收敛。错项与收敛无关。易错点：变换对必须连同条件记忆。'),
    q('5.1','error_discrimination','两个频谱表达式相差 \\(2\\pi\\) 平移，学生判定它们不同。忽略了什么？','DTFT的 \\(2\\pi\\) 周期性',[wrong('DTFS下标模N','WRONG_MOD_N'),wrong('CTFT对偶性','WRONG_DUALITY_FACTOR'),wrong('时域共轭对称','IGNORED_CONJUGATE_SYMMETRY')],'正确：\\(X(e^{j(\\omega+2\\pi)})=X(e^{j\\omega})\\)。错项引用其他章节性质。易错点：比较DTFT表达式前先做模 \\(2\\pi\\) 化简。')
  ],

  '5.2|concept':[
    q('5.2','concept','周期序列的DTFT在频域通常是什么形式？','以 \\(2\\pi\\) 周期重复的冲激线谱',[wrong('非周期连续曲线','CONFUSE_CT_DT'),wrong('只含零频冲激','WRONG_HARMONIC_INDEX'),wrong('有限个不重复的普通数值','WRONG_PERIOD')],'正确：周期序列由有限组离散谐波组成，其DTFT是周期冲激列。错项混淆非周期序列和DTFS系数表。易错点：DTFT频率轴本身仍以 \\(2\\pi\\) 周期重复。')
  ],
  '5.2|formula':[
    q('5.2','formula','N周期序列DTFS系数为 \\(a_k\\)，其DTFT可写成什么？','\\(2\\pi\\sum_{k=0}^{N-1}a_k\\sum_{r=-\\infty}^{\\infty}\\delta(\\omega-2\\pi k/N-2\\pi r)\\)',[wrong('\\(\\sum_ka_k\\delta(\\omega-k)\\)','MISSING_2PI'),wrong('\\(2\\pi\\sum_ka_k\\delta(\\omega-kN)\\)','WRONG_FREQUENCY_SCALE'),wrong('\\(\\sum_na_ne^{-j\\omega n}\\) 且无周期冲激','WRONG_PERIOD')],'正确：每个DTFS谐波在其频率及所有 \\(2\\pi\\) 平移处产生冲激。错项漏周期延拓、频率尺度或权重。易错点：基本谱线间隔是 \\(2\\pi/N\\)。')
  ],
  '5.2|transform_pair':[
    q('5.2','transform_pair','常数序列 \\(x[n]=1\\) 的DTFT是什么？','\\(2\\pi\\sum_{r=-\\infty}^{\\infty}\\delta(\\omega-2\\pi r)\\)',[wrong('\\(2\\pi\\delta(\\omega)\\)','WRONG_PERIOD'),wrong('\\(1\\)','CONFUSE_CT_DT'),wrong('\\(\\sum_r\\delta(\\omega-r)\\)','MISSING_2PI')],'正确：常数序列是周期1序列，频谱冲激必须每 \\(2\\pi\\) 重复。错项只保留主值冲激或混入CTFT。易错点：写DTFT时不能忘周期延拓。'),
    q('5.2','transform_pair','序列 \\(e^{j\\omega_0n}\\) 的DTFT是哪一个？','\\(2\\pi\\sum_r\\delta(\\omega-\\omega_0-2\\pi r)\\)',[wrong('\\(2\\pi\\delta(\\omega-\\omega_0)\\)','WRONG_PERIOD'),wrong('\\(2\\pi\\sum_r\\delta(\\omega+\\omega_0-2\\pi r)\\)','SIGN_ERROR'),wrong('\\(e^{-j\\omega\\omega_0}\\)','CONFUSE_CT_DT')],'正确：单一离散时间复指数对应以 \\(2\\pi\\) 重复的谱线。错项漏周期副本、写反频率或混淆变量。易错点：DTFT线谱也必须周期延拓。'),
    q('5.2','transform_pair','\\(\\cos(\\omega_0n)\\) 的DTFT包含哪些谱线？','在 \\(\\pm\\omega_0+2\\pi r\\) 处各有权重 \\(\\pi\\) 的冲激',[wrong('只在 \\(\\omega_0\\) 处有权重 \\(2\\pi\\) 的冲激','IGNORED_CONJUGATE_SYMMETRY'),wrong('在 \\(\\pm\\omega_0\\) 处各有权重1且不重复','WRONG_PERIOD'),wrong('在零频有权重 \\(2\\pi\\) 的冲激','WRONG_DC_COEFFICIENT')],'正确：余弦含正负两个系数1/2的复指数，每条谱线权重为 \\(\\pi\\) 并周期重复。错项漏一侧、漏周期或误作直流。易错点：实余弦的双边谱和DTFT周期性都要保留。')
  ],
  '5.2|error_discrimination':[
    q('5.2','error_discrimination','学生写 \\(1\\leftrightarrow2\\pi\\delta(\\omega)\\) 作为完整DTFT。漏了什么？','频域冲激应每隔 \\(2\\pi\\) 周期重复',[wrong('冲激权重应改成1','MISSING_2PI'),wrong('时间序列应改成冲激','CONFUSE_IMPULSE_STEP'),wrong('频率轴应改成离散k','CONFUSE_CT_DT')],'正确：完整DTFT为 \\(2\\pi\\sum_r\\delta(\\omega-2\\pi r)\\)。错项改变权重或变换类型。易错点：只画主值区间时可见一条，但公式仍需说明周期。'),
    q('5.2','error_discrimination','周期N序列的谱线间隔被写为 \\(N\\)。正确间隔是什么？','\\(2\\pi/N\\)',[wrong('\\(N/2\\pi\\)','WRONG_FREQUENCY_SCALE'),wrong('\\(2\\pi N\\)','WRONG_FREQUENCY_SCALE'),wrong('\\(1/N\\)','MISSING_2PI')],'正确：DTFS基频为 \\(\\omega_0=2\\pi/N\\)。错项取倒数、乘错N或漏 \\(2\\pi\\)。易错点：N是样本周期，频率间隔与其成反比。'),
    q('5.2','error_discrimination','周期序列DTFT只写了 \\(0\\le k<N\\) 的冲激，却未做 \\(2\\pi\\) 延拓。问题是什么？','表达式不是完整DTFT，缺少所有周期副本',[wrong('应把k改成连续时间t','CONFUSE_CT_DT'),wrong('应把每条权重平方','FORGOT_MAGNITUDE_SQUARED'),wrong('应对下标模N后删除冲激','WRONG_MOD_N')],'正确：一个主值区间内的谱线还需按 \\(2\\pi\\) 重复。错项混淆变量、能量或DTFS索引。易错点：有限独立系数不等于频谱只存在一段。')
  ],

  '5.3|concept':[
    q('5.3','concept','实时域序列的DTFT满足哪一关系？','\\(X(e^{-j\\omega})=X^*(e^{j\\omega})\\)',[wrong('\\(X(e^{-j\\omega})=X(e^{j\\omega})\\) 对所有实序列成立','IGNORED_CONJUGATE_SYMMETRY'),wrong('\\(X(e^{j\\omega})\\) 必为实数','IGNORED_CONJUGATE_SYMMETRY'),wrong('频谱不必周期','WRONG_PERIOD')],'正确：实序列产生共轭对称DTFT。错项把共轭对称误成偶或纯实，并忽略周期性。易错点：实偶序列才对应实偶频谱。')
  ],
  '5.3|formula':[
    q('5.3','formula','若 \\(x[n]\\leftrightarrow X(e^{j\\omega})\\)，则 \\(x[n-n_0]\\) 对应什么？','\\(e^{-j\\omega n_0}X(e^{j\\omega})\\)',[wrong('\\(e^{j\\omega n_0}X(e^{j\\omega})\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(X(e^{j(\\omega-n_0)})\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(n_0X(e^{j\\omega})\\)','MISS_SCALE_FACTOR')],'正确：离散时间右移产生负线性相位。错项写反符号或把时移当频移。易错点：与CTFT时移形式一致，但n0为整数。'),
    q('5.3','formula','若 \\(x[n]\\leftrightarrow X(e^{j\\omega})\\)，则 \\(e^{j\\omega_0n}x[n]\\) 对应什么？','\\(X(e^{j(\\omega-\\omega_0)})\\)',[wrong('\\(X(e^{j(\\omega+\\omega_0)})\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(e^{-j\\omega n_0}X(e^{j\\omega})\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(X(e^{j\\omega_0})\\)','WRONG_FREQUENCY_SCALE')],'正确：乘正频率复指数使DTFT右移 \\(\\omega_0\\)。错项写反频移或混入时移。易错点：结果仍需按 \\(2\\pi\\) 周期理解。'),
    q('5.3','formula','序列反转 \\(x[-n]\\) 的DTFT是什么？','\\(X(e^{-j\\omega})\\)',[wrong('\\(-X(e^{j\\omega})\\)','SIGN_ERROR'),wrong('\\(X^*(e^{j\\omega})\\)','IGNORED_CONJUGATE_SYMMETRY'),wrong('\\(X(e^{j/\\omega})\\)','WRONG_FREQUENCY_SCALE')],'正确：令m=-n可得频率变量反转。错项混入函数负号、共轭或倒数尺度。易错点：只有实序列时反转谱才等于共轭谱。'),
    q('5.3','formula','序列乘以n的DTFT是什么？','\\(j\\frac{d}{d\\omega}X(e^{j\\omega})\\)',[wrong('\\(-j\\frac{d}{d\\omega}X(e^{j\\omega})\\)','SIGN_ERROR'),wrong('\\(j\\omega X(e^{j\\omega})\\)','WRONG_DIFFERENTIATION_FACTOR'),wrong('\\(nX(e^{j\\omega})\\)','CONFUSE_CT_DT')],'正确：对DTFT关于 \\(\\omega\\) 求导得到 \\(-j\\sum nx[n]e^{-j\\omega n}\\)，故乘j。错项写反符号或混入CT微分。易错点：离散时间没有普通的 \\(dx/dt\\) 性质。'),
    q('5.3','formula','DTFT Parseval能量公式是哪一个？','\\(\\sum_n|x[n]|^2=\\frac1{2\\pi}\\int_{-\\pi}^{\\pi}|X(e^{j\\omega})|^2d\\omega\\)',[wrong('\\(\\sum_nx[n]=\\int X(e^{j\\omega})d\\omega\\)','FORGOT_MAGNITUDE_SQUARED'),wrong('\\(\\sum_n|x[n]|^2=2\\pi\\int|X|^2d\\omega\\)','WRONG_PARSEVAL_FACTOR'),wrong('\\(\\sum_n|x[n]|=\\frac1{2\\pi}\\int|X|d\\omega\\)','FORGOT_MAGNITUDE_SQUARED')],'正确：离散序列能量等于一周期频谱模平方积分乘 \\(1/2\\pi\\)。错项漏平方或系数错误。易错点：频域只积一个完整周期。'),
    q('5.3','formula','若 \\(y[n]=x[n]-x[n-1]\\)，则 \\(Y(e^{j\\omega})\\) 是什么？','\\((1-e^{-j\\omega})X(e^{j\\omega})\\)',[wrong('\\((1-e^{j\\omega})X(e^{j\\omega})\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(j\\omega X(e^{j\\omega})\\)','CONFUSE_CT_DT'),wrong('\\(X(e^{j\\omega})/(1-e^{-j\\omega})\\)','WRONG_DIFFERENTIATION_FACTOR')],'正确：延时一位对应 \\(e^{-j\\omega}\\)，作差得乘子 \\(1-e^{-j\\omega}\\)。错项写反延时或套连续微分。易错点：离散差分的频率因子不是 \\(j\\omega\\)。'),
    q('5.3','formula','若 \\(x^*[n]\\) 的DTFT用X表示，正确结果是什么？','\\(X^*(e^{-j\\omega})\\)',[wrong('\\(X^*(e^{j\\omega})\\)','IGNORED_CONJUGATE_SYMMETRY'),wrong('\\(X(e^{-j\\omega})\\)','IGNORED_CONJUGATE_SYMMETRY'),wrong('\\(-X^*(e^{-j\\omega})\\)','SIGN_ERROR')],'正确：对DTFT求共轭时指数符号反转，因此得到 \\(X^*(e^{-j\\omega})\\)。错项只做共轭或只做反转。易错点：共轭性质包含频率反转。')
  ],
  '5.3|transform_pair':[
    q('5.3','transform_pair','已知 \\(x[n]\\leftrightarrow X(e^{j\\omega})\\)，哪一对表示延时3点？','\\(x[n-3]\\leftrightarrow e^{-j3\\omega}X(e^{j\\omega})\\)',[wrong('\\(x[n-3]\\leftrightarrow e^{j3\\omega}X(e^{j\\omega})\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(x[n-3]\\leftrightarrow X(e^{j(\\omega-3)})\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(x[3n]\\leftrightarrow e^{-j3\\omega}X(e^{j\\omega})\\)','INVALID_TIME_SCALING_FOR_LTI')],'正确：整数延时3产生 \\(e^{-j3\\omega}\\)。错项相位符号错或混淆频移/抽取。易错点：离散时间尺度变换不能直接照搬CTFT公式。'),
    q('5.3','transform_pair','已知 \\(x[n]\\leftrightarrow X(e^{j\\omega})\\)，哪一对表示频移 \\(\\pi\\)？','\\((-1)^nx[n]\\leftrightarrow X(e^{j(\\omega-\\pi)})\\)',[wrong('\\((-1)^nx[n]\\leftrightarrow-X(e^{j\\omega})\\)','SIGN_ERROR'),wrong('\\(x[-n]\\leftrightarrow X(e^{j(\\omega-\\pi)})\\)','MISSING_TIME_REVERSAL'),wrong('\\(x[n-1]\\leftrightarrow X(e^{j(\\omega-\\pi)})\\)','WRONG_SHIFT_DIRECTION')],'正确：\\((-1)^n=e^{j\\pi n}\\) 触发频移性质。错项把调制当整体负号、反转或延时。易错点：在DTFT中 \\(\\omega-\\pi\\) 与 \\(\\omega+\\pi\\) 等价。'),
    q('5.3','transform_pair','哪一对正确体现序列反转？','\\(x[-n]\\leftrightarrow X(e^{-j\\omega})\\)',[wrong('\\(x[-n]\\leftrightarrow-X(e^{j\\omega})\\)','SIGN_ERROR'),wrong('\\(x[-n]\\leftrightarrow X^*(e^{j\\omega})\\) 对任意复序列成立','IGNORED_CONJUGATE_SYMMETRY'),wrong('\\(x[-n]\\leftrightarrow X(e^{j(\\omega-\\pi)})\\)','WRONG_SHIFT_DIRECTION')],'正确：序列下标反转对应频率反转。错项把反转当取负、共轭或频移。易错点：实序列时才可进一步写成共轭谱。')
  ],
  '5.3|error_discrimination':[
    q('5.3','error_discrimination','学生写 \\(x[n-n_0]\\leftrightarrow e^{j\\omega n_0}X\\)。错误是什么？','延时相位符号应为负',[wrong('应把n0改成连续时间t0','CONFUSE_CT_DT'),wrong('应乘 \\(2\\pi\\)','MISSING_2PI'),wrong('应把X取模平方','FORGOT_MAGNITUDE_SQUARED')],'正确：右移n0点对应 \\(e^{-j\\omega n_0}\\)。错项引入无关变量、常数或能量。易错点：延时对应负线性相位。'),
    q('5.3','error_discrimination','学生把 \\(x[2n]\\) 的DTFT直接写成 \\(\\frac12X(e^{j\\omega/2})\\)。为什么不成立？','离散时间抽取会产生频谱混叠，不能直接套连续时间尺度公式',[wrong('系数只需改成2','MISS_SCALE_FACTOR'),wrong('频谱只需反转','MISSING_TIME_REVERSAL'),wrong('因为DTFT不周期','WRONG_PERIOD')],'正确：下标只能取整数，抽取包含多个移位频谱副本。错项只是修系数或否认周期性。易错点：CTFT的 \\(1/|a|\\) 尺度公式不可直接用于DTFT。'),
    q('5.3','error_discrimination','学生由实序列推出DTFT必为偶函数。缺少什么条件？','还需序列为偶序列',[wrong('还需序列为因果序列','CAUSALITY_ERROR'),wrong('还需序列为周期序列','WRONG_PERIOD'),wrong('还需序列长度为偶数','WRONG_MOD_N')],'正确：实性只保证共轭对称；实且偶才保证频谱实偶。错项不推出偶频谱。易错点：区分实性、偶性与共轭对称。'),
    q('5.3','error_discrimination','学生把 \\(x[n]-x[n-1]\\) 的频率因子写成 \\(j\\omega\\)。混淆了什么？','把离散一阶差分当成连续时间微分',[wrong('漏了模平方','FORGOT_MAGNITUDE_SQUARED'),wrong('漏了下标模N','WRONG_MOD_N'),wrong('漏了频谱卷积','CONFUSE_CONVOLUTION_MULTIPLICATION')],'正确：离散差分因子是 \\(1-e^{-j\\omega}\\)，不是 \\(j\\omega\\)。错项与差分性质无关。易错点：低频近似相似不代表恒等。'),
    q('5.3','error_discrimination','DTFT Parseval右侧积分取 \\(( -\\infty,\\infty)\\) 会有什么问题？','因频谱周期，会重复累计同一能量；应只取一个 \\(2\\pi\\) 周期',[wrong('应改为对整数频率求和','CONFUSE_CT_DT'),wrong('应删除模平方','FORGOT_MAGNITUDE_SQUARED'),wrong('应把系数改成 \\(2\\pi\\)','WRONG_PARSEVAL_FACTOR')],'正确：DTFT周期延拓使全轴积分对非零能量通常发散。错项改变了变换类型或能量定义。易错点：DTFT逆变换和Parseval都只需一个周期。'),
    q('5.3','error_discrimination','学生认为 \\(X(e^{j(\\omega+2\\pi)})=-X(e^{j\\omega})\\)。正确关系是什么？','两者完全相等',[wrong('两者互为共轭','IGNORED_CONJUGATE_SYMMETRY'),wrong('只有实序列时相等','IGNORED_CONJUGATE_SYMMETRY'),wrong('只有偶序列时相等','WRONG_PERIOD')],'正确：指数核增加 \\(2\\pi\\) 后对整数n不变，因此对任意序列均相等。错项额外要求实性或偶性。易错点：\\(2\\pi\\) 周期性与信号类型无关。'),
    q('5.3','error_discrimination','频移性质中学生写 \\(e^{j\\omega_0n}x[n]\\leftrightarrow X(e^{j(\\omega+\\omega_0)})\\)。如何纠正？','括号内应为 \\(\\omega-\\omega_0\\)',[wrong('应把指数改成 \\(e^{j\\omega n_0}\\)','WRONG_SHIFT_DIRECTION'),wrong('应乘 \\(1/2\\pi\\)','MISSING_2PI'),wrong('应把X取共轭','IGNORED_CONJUGATE_SYMMETRY')],'正确：正指数调制把频谱右移，所以函数参数减 \\(\\omega_0\\)。错项混入时移、归一化或共轭。易错点：跟踪原零频峰移动到哪里。'),
    q('5.3','error_discrimination','学生写 \\(nx[n]\\leftrightarrow j\\omega X(e^{j\\omega})\\)。错在哪里？','应为对频率求导 \\(j\\,dX/d\\omega\\)',[wrong('应为 \\(X/(j\\omega)\\)','WRONG_DIFFERENTIATION_FACTOR'),wrong('应为 \\(-X\\)','SIGN_ERROR'),wrong('应对n求积分','CONFUSE_CT_DT')],'正确：时域乘下标对应频域微分。错项混入连续时间微分乘子或无关运算。易错点：变量相乘与另一域求导配对。'),
    q('5.3','error_discrimination','比较 \\(X(e^{j(\\omega-3\\pi)})\\) 与 \\(X(e^{j(\\omega-\\pi)})\\)，学生认为不同。结论是什么？','两者相同，因为自变量相差 \\(2\\pi\\)',[wrong('两者相反','SIGN_ERROR'),wrong('两者仅幅度相同','IGNORED_CONJUGATE_SYMMETRY'),wrong('只有N周期序列才相同','WRONG_MOD_N')],'正确：DTFT对频率变量具有 \\(2\\pi\\) 周期性。错项混淆符号、共轭或DTFS周期。易错点：先把所有频移量模 \\(2\\pi\\)。')
  ],

  '5.4|concept':[
    q('5.4','concept','离散时间卷积和在DTFT域对应什么？','两个DTFT直接相乘',[wrong('两个DTFT卷积并乘 \\(1/2\\pi\\)','CONFUSE_CONVOLUTION_MULTIPLICATION'),wrong('两个DTFT相加','LINEARITY_ERROR'),wrong('两个DTFT模平方相乘','FORGOT_MAGNITUDE_SQUARED')],'正确：\\(x*h\\leftrightarrow XH\\)。错项混淆时域相乘、线性叠加或能量。易错点：离散卷积和与连续卷积积分具有相同跨域结构。')
  ],
  '5.4|formula':[
    q('5.4','formula','若 \\(y[n]=x[n]*h[n]\\)，则 \\(Y(e^{j\\omega})\\) 是什么？','\\(X(e^{j\\omega})H(e^{j\\omega})\\)',[wrong('\\(X*H\\)','CONFUSE_CONVOLUTION_MULTIPLICATION'),wrong('\\((X+H)/2\\)','LINEARITY_ERROR'),wrong('\\(X/H\\)','CONFUSE_CONVOLUTION_MULTIPLICATION')],'正确：DTFT卷积定理把时域卷积和化为频域点乘。错项把域内卷积、平均或除法混入。易错点：频率响应仍由 \\(H=Y/X\\) 求得。'),
    q('5.4','formula','频域周期卷积 \\(X(e^{j\\omega})*_{2\\pi}H(e^{j\\omega})\\) 对应时域什么？','\\(2\\pi x[n]h[n]\\)',[wrong('\\(x[n]h[n]\\)','MISSING_2PI'),wrong('\\(x[n]*h[n]\\)','CONFUSE_CONVOLUTION_MULTIPLICATION'),wrong('\\(x[n]h[n]/(2\\pi)\\)','MISSING_2PI')],'正确：时域乘积对应 \\(1/2\\pi\\) 倍的频域周期卷积，因此反向读得 \\(2\\pi xh\\)。错项漏或倒置系数。易错点：DTFT频域卷积需按一个周期定义。')
  ],
  '5.4|transform_pair':[
    q('5.4','transform_pair','已知 \\(x_1\\leftrightarrow X_1\\)、\\(x_2\\leftrightarrow X_2\\)，哪一对正确？','\\(x_1[n]*x_2[n]\\leftrightarrow X_1(e^{j\\omega})X_2(e^{j\\omega})\\)',[wrong('\\(x_1*x_2\\leftrightarrow X_1*X_2\\)','CONFUSE_CONVOLUTION_MULTIPLICATION'),wrong('\\(x_1x_2\\leftrightarrow X_1X_2\\)','CONFUSE_CONVOLUTION_MULTIPLICATION'),wrong('\\(x_1*x_2\\leftrightarrow X_1+X_2\\)','LINEARITY_ERROR')],'正确：时域卷积对应频域乘积。错项在两个域使用同一运算或误作相加。易错点：星号跨域后变成普通乘号。'),
    q('5.4','transform_pair','\\(x[n]*\\delta[n-n_0]\\) 的DTFT是哪一项？','\\(e^{-j\\omega n_0}X(e^{j\\omega})\\)',[wrong('\\(e^{j\\omega n_0}X(e^{j\\omega})\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(X(e^{j(\\omega-n_0)})\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(2\\pi X(e^{j\\omega})\\)','MISSING_2PI')],'正确：与移位单位样值卷积得到 \\(x[n-n_0]\\)，再应用时移性质。错项相位符号或域变换错误。易错点：单位样值卷积负责平移。')
  ],
  '5.4|error_discrimination':[
    q('5.4','error_discrimination','学生在卷积和中写 \\(x[k]h[k-n]\\)。与标准 \\(h[n-k]\\) 相比发生了什么？','卷积核额外反向，通常得到错误结果',[wrong('只是哑变量改名','WRONG_CONVOLUTION_INDEX'),wrong('两个序列同时平移','BOTH_SIGNALS_SHIFTED'),wrong('只漏了 \\(2\\pi\\)','MISSING_2PI')],'正确：\\(h[k-n]\\) 与 \\(h[n-k]\\) 一般不同，前者翻转方向相反。错项低估变化或混入其他错误。易错点：先写 \\(h[-k]\\)，再平移n。'),
    q('5.4','error_discrimination','学生把 \\(x*h\\) 的DTFT写成频域卷积。应改为什么？','频域普通乘积 \\(XH\\)',[wrong('频域相加','LINEARITY_ERROR'),wrong('频域相除','CONFUSE_CONVOLUTION_MULTIPLICATION'),wrong('频域模平方','FORGOT_MAGNITUDE_SQUARED')],'正确：卷积定理将时域卷积和变为点乘。错项使用无关运算。易错点：不要因时域和频域都写星号而混淆。'),
    q('5.4','error_discrimination','计算 \\(y[n]=\\sum_kx[k]h[n-k]\\) 时，学生把n也作为求和变量消去。错误是什么？','n是输出下标，应保留；只有k是哑变量',[wrong('k必须固定为0','WRONG_CONVOLUTION_INDEX'),wrong('n与k都应模N','WRONG_MOD_N'),wrong('h不应发生平移','MISSING_TIME_REVERSAL')],'正确：卷积和对k遍历，结果仍是n的函数。错项误解求和下标或周期卷积。易错点：每一步都检查输出变量n是否仍存在。'),
    q('5.4','error_discrimination','两个有限长序列长度分别为L和M，线性卷积长度被写为 \\(L+M\\)。应为多少？','\\(L+M-1\\)',[wrong('\\(LM\\)','WRONG_SUPPORT_INTERVAL'),wrong('\\(\\max(L,M)\\)','WRONG_SUPPORT_INTERVAL'),wrong('\\(|L-M|\\)','WRONG_SUPPORT_INTERVAL')],'正确：支撑端点相加后包含的整数点数为 \\(L+M-1\\)。错项混淆点数与端点跨度。易错点：单点与单点卷积长度应为1，可快速排除。')
  ],

  '5.5|concept':[
    q('5.5','concept','离散时域相乘在DTFT域对应什么？','两个周期频谱的卷积并乘 \\(1/(2\\pi)\\)',[wrong('频谱直接相乘','CONFUSE_CONVOLUTION_MULTIPLICATION'),wrong('频谱相加','LINEARITY_ERROR'),wrong('非周期频谱卷积且无系数','WRONG_PERIOD')],'正确：\\(x_1x_2\\leftrightarrow(1/2\\pi)(X_1*_{2\\pi}X_2)\\)。错项混淆卷积定理或忽略周期性。易错点：DTFT频域卷积必须按周期处理。')
  ],
  '5.5|formula':[
    q('5.5','formula','若 \\(y[n]=x[n]g[n]\\)，则 \\(Y(e^{j\\omega})\\) 是什么？','\\(\\frac1{2\\pi}[X*_{2\\pi}G](e^{j\\omega})\\)',[wrong('\\(X(e^{j\\omega})G(e^{j\\omega})\\)','CONFUSE_CONVOLUTION_MULTIPLICATION'),wrong('\\(2\\pi[X*G]\\)','MISSING_2PI'),wrong('\\(X+G\\)','LINEARITY_ERROR')],'正确：时域点乘对应带 \\(1/2\\pi\\) 的频域周期卷积。错项混成时域卷积或系数取反。易错点：频域结果仍以 \\(2\\pi\\) 为周期。'),
    q('5.5','formula','\\(x[n]\\cos(\\omega_0n)\\) 的DTFT是哪一项？','\\(\\frac12[X(e^{j(\\omega-\\omega_0)})+X(e^{j(\\omega+\\omega_0)})]\\)',[wrong('\\(X(e^{j(\\omega-\\omega_0)})\\)','IGNORED_CONJUGATE_SYMMETRY'),wrong('\\(X(e^{j\\omega})\\cos\\omega_0\\)','CONFUSE_CONVOLUTION_MULTIPLICATION'),wrong('\\(2[X_-+X_+]\\)','MISS_FACTOR_2')],'正确：余弦由正负两个复指数各占1/2构成。错项漏一侧、没有变换或倍数错误。易错点：两份移频谱还会按 \\(2\\pi\\) 绕回。')
  ],
  '5.5|transform_pair':[
    q('5.5','transform_pair','哪一对正确描述离散余弦调制？','\\(x[n]\\cos\\omega_0n\\leftrightarrow\\frac12[X(\\omega-\\omega_0)+X(\\omega+\\omega_0)]\\)',[wrong('\\(x[n]\\cos\\omega_0n\\leftrightarrow X(\\omega-\\omega_0)\\)','IGNORED_CONJUGATE_SYMMETRY'),wrong('\\(x[n]\\cos\\omega_0n\\leftrightarrow X(\\omega)\\cos\\omega_0\\)','CONFUSE_CONVOLUTION_MULTIPLICATION'),wrong('\\(x[n]\\cos\\omega_0n\\leftrightarrow2[X_-+X_+]\\)','MISS_FACTOR_2')],'正确：余弦调制产生两个半幅频移副本。错项漏副本、留在时域或倍数错误。易错点：DTFT副本越过边界后按 \\(2\\pi\\) 折回。'),
    q('5.5','transform_pair','若 \\(g[n]=(-1)^n\\)，则 \\(x[n]g[n]\\) 的频谱是什么？','\\(X(e^{j(\\omega-\\pi)})\\)',[wrong('\\(-X(e^{j\\omega})\\)','SIGN_ERROR'),wrong('\\(X(e^{-j\\omega})\\)','MISSING_TIME_REVERSAL'),wrong('\\(e^{-j\\omega}X(e^{j\\omega})\\)','WRONG_SHIFT_DIRECTION')],'正确：\\((-1)^n=e^{j\\pi n}\\)，相乘使频谱平移 \\(\\pi\\)。错项把逐点交替符号当整体负号、反转或延时。易错点：因周期性，加减 \\(\\pi\\) 等价。')
  ],
  '5.5|error_discrimination':[
    q('5.5','error_discrimination','学生写 \\(x[n]g[n]\\leftrightarrow XG\\)。核心错误是什么？','时域相乘应对应频域周期卷积',[wrong('应对应频域相加','LINEARITY_ERROR'),wrong('应对应频域相除','CONFUSE_CONVOLUTION_MULTIPLICATION'),wrong('应把两谱都取模平方','FORGOT_MAGNITUDE_SQUARED')],'正确：频域直接相乘对应时域卷积和。错项使用无关运算。易错点：区分时域星号卷积和普通乘号。'),
    q('5.5','error_discrimination','离散余弦调制后只画一份右移频谱，漏了什么？','还应有一份左移频谱，且两份各乘1/2',[wrong('还应对频谱求导','WRONG_DIFFERENTIATION_FACTOR'),wrong('还应取时间反转','MISSING_TIME_REVERSAL'),wrong('还应删除周期副本','WRONG_PERIOD')],'正确：余弦包含正、负频率两个复指数分量。错项与调制展开无关。易错点：复指数调制一份，余弦调制两份。'),
    q('5.5','error_discrimination','频域周期卷积只在 \\([-\\pi,\\pi]\\) 做普通卷积且不考虑绕回，会造成什么？','漏掉跨越区间边界后按 \\(2\\pi\\) 折回的贡献',[wrong('只会多一个 \\(2\\pi\\) 系数','MISSING_2PI'),wrong('只会改变相位符号','SIGN_ERROR'),wrong('结果自动变成CTFT','CONFUSE_CT_DT')],'正确：DTFT谱是周期函数，卷积必须包含周期延拓的重叠。错项把结构错误说成系数或符号问题。易错点：先周期延拓再卷积。')
  ],

  '5.6|concept':[
    q('5.6','concept','用DTFT变换对做快速检查时，哪条原则最可靠？','同时检查 \\(2\\pi\\) 周期性、零频值和对称性',[wrong('只检查公式长度','IGNORED_CONVERGENCE_CONDITION'),wrong('只检查是否含 \\(2\\pi\\)','MISSING_2PI'),wrong('只检查分母次数','WRONG_COEFFICIENT_NORMALIZATION')],'正确：周期性、面积/求和值与对称性提供互相独立的快速校验。错项只看表面形式。易错点：一个表达式通过单项检查仍可能有符号错误。')
  ],
  '5.6|formula':[
    q('5.6','formula','有限序列 \\(x[n]=1,0\\le n\\le N-1\\) 的零频DTFT值是多少？','\\(N\\)',[wrong('\\(1\\)','MISS_SCALE_FACTOR'),wrong('\\(N-1\\)','WRONG_SUPPORT_INTERVAL'),wrong('\\(2\\pi N\\)','MISSING_2PI')],'正确：\\(X(e^{j0})=\\sum_nx[n]\\)，共有N个1。错项漏样本数、端点计数或混入 \\(2\\pi\\)。易错点：0到N-1包含N个整数点。'),
    q('5.6','formula','对 \\(a^nu[n],|a|<1\\)，\\(X(e^{j0})\\) 是多少？','\\(1/(1-a)\\)',[wrong('\\(1/(1+a)\\)','SIGN_ERROR'),wrong('\\(1/a\\)','WRONG_COEFFICIENT_NORMALIZATION'),wrong('\\(2\\pi/(1-a)\\)','MISSING_2PI')],'正确：在 \\(\\omega=0\\) 代入几何和，亦等于序列总和。错项符号、结构或归一化错误。易错点：零频检查可发现指数符号和系数问题。')
  ],
  '5.6|transform_pair':[
    q('5.6','transform_pair','下列哪一项是正确的有限矩形序列变换对？','\\(u[n]-u[n-N]\\leftrightarrow\\sum_{n=0}^{N-1}e^{-j\\omega n}\\)',[wrong('\\(u[n]-u[n-N]\\leftrightarrow Ne^{-j\\omega N}\\)','MISS_SCALE_FACTOR'),wrong('\\(u[n]-u[n-N]\\leftrightarrow1/(1-e^{-j\\omega})\\)','WRONG_SUPPORT_INTERVAL'),wrong('\\(u[n]-u[n-N]\\leftrightarrow2\\pi\\delta(\\omega)\\)','CONFUSE_IMPULSE_STEP')],'正确：两个阶跃之差仅保留0到N-1，DTFT是有限几何和。错项误作单项、无限阶跃或常数序列。易错点：有限和在零频的极限是N。'),
    q('5.6','transform_pair','左边序列 \\(-a^nu[-n-1],|a|>1\\) 的DTFT是哪一项？','\\(1/(1-ae^{-j\\omega})\\)',[wrong('\\(1/(1-ae^{j\\omega})\\)','SIGN_ERROR'),wrong('\\(1/(a+j\\omega)\\)','CONFUSE_CT_DT'),wrong('\\(-1/(1-ae^{-j\\omega})\\)','MISS_SCALE_FACTOR')],'正确：在相应收敛条件下，左边序列与该代数频率表达式配对。错项写反指数、混入CTFT或保留错误负号。易错点：相同代数式可因收敛区域对应不同序列。'),
    q('5.6','transform_pair','\\(\\delta[n]+\\delta[n-1]\\) 的DTFT是什么？','\\(1+e^{-j\\omega}\\)',[wrong('\\(1+e^{j\\omega}\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(2\\delta(\\omega)\\)','CONFUSE_CT_DT'),wrong('\\(e^{-j2\\omega}\\)','WRONG_SHIFT_DIRECTION')],'正确：两个移位单位样值分别贡献1和 \\(e^{-j\\omega}\\)。错项写反延时或把相加误合并。易错点：线性叠加后各项都要保留。'),
    q('5.6','transform_pair','\\(\\delta[n]-\\delta[n-1]\\) 的DTFT是什么？','\\(1-e^{-j\\omega}\\)',[wrong('\\(1-e^{j\\omega}\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(j\\omega\\)','CONFUSE_CT_DT'),wrong('\\(1+e^{-j\\omega}\\)','SIGN_ERROR')],'正确：延时单位样值对应 \\(e^{-j\\omega}\\)，相减保留负号。错项写反延时、混入连续微分或符号错误。易错点：它在零频处为0，符合差分器抑制直流。'),
    q('5.6','transform_pair','\\(a^{|n|},|a|<1\\) 的DTFT应具有什么特征？','实、偶、以 \\(2\\pi\\) 为周期',[wrong('纯虚、奇','IGNORED_CONJUGATE_SYMMETRY'),wrong('实、奇','IGNORED_CONJUGATE_SYMMETRY'),wrong('实、偶但不周期','WRONG_PERIOD')],'正确：时域为实偶序列，因此频谱实偶；任何DTFT还必须 \\(2\\pi\\) 周期。错项破坏对称性或周期性。易错点：先用结构判断再看具体分式。')
  ],
  '5.6|error_discrimination':[
    q('5.6','error_discrimination','有限长N点全1序列的频谱公式在 \\(\\omega=0\\) 给出0。最可能哪里错？','没有正确取 \\(0/0\\) 形式的极限，正确值应为N',[wrong('应在零频加一个冲激','CONFUSE_IMPULSE_STEP'),wrong('应把N改成 \\(2\\pi\\)','MISSING_2PI'),wrong('DTFT在零频无定义','IGNORED_CONVERGENCE_CONDITION')],'正确：正弦比在零频需取极限，等于样本总和N。错项误加冲激或否认定义。易错点：遇到可去奇点先回到有限和。'),
    q('5.6','error_discrimination','\\(\\delta[n-2]\\) 的DTFT被写成 \\(e^{j2\\omega}\\)。错误是什么？','延时相位符号写反，应为 \\(e^{-j2\\omega}\\)',[wrong('应为 \\(2\\pi\\delta(\\omega-2)\\)','CONFUSE_CT_DT'),wrong('应为 \\(e^{-j\\omega/2}\\)','WRONG_FREQUENCY_SCALE'),wrong('应为2','MISS_SCALE_FACTOR')],'正确：右移2点带负线性相位。错项混淆CTFT、尺度或幅度。易错点：单位样值移位对的幅度恒为1。'),
    q('5.6','error_discrimination','某候选DTFT不是 \\(2\\pi\\) 周期函数。能否对应普通离散时间序列？','不能；任何离散时间序列的DTFT都必须 \\(2\\pi\\) 周期',[wrong('能，只要序列有限长','WRONG_PERIOD'),wrong('能，只要序列为实数','IGNORED_CONJUGATE_SYMMETRY'),wrong('只有周期序列的DTFT才周期','WRONG_PERIOD')],'正确：周期性来自整数n的指数核，与序列长度、实性无关。错项施加无关条件。易错点：这是判断DTFT表达式合法性的首要检查。'),
    q('5.6','error_discrimination','把 \\(a^nu[n]\\) 的条件从 \\(|a|<1\\) 删除，会有什么风险？','几何级数可能不收敛，所写DTFT失去普通意义',[wrong('只会改变频谱周期','WRONG_PERIOD'),wrong('只会多一个 \\(2\\pi\\)','MISSING_2PI'),wrong('只会使频谱变成偶函数','IGNORED_CONJUGATE_SYMMETRY')],'正确：收敛条件是变换对的一部分。错项把收敛问题误作周期、系数或对称性。易错点：背变换对时同时记支撑和参数范围。'),
    q('5.6','error_discrimination','\\(\\delta[n]+\\delta[n-1]\\) 的频谱被合并成 \\(2e^{-j\\omega}\\)。错在哪里？','两个样值位置不同，相位因子不能直接合并',[wrong('应对两个冲激卷积','CONFUSE_CONVOLUTION_MULTIPLICATION'),wrong('应加 \\(2\\pi\\) 周期冲激','CONFUSE_CT_DT'),wrong('应取模平方后相加','FORGOT_MAGNITUDE_SQUARED')],'正确：正确结果为 \\(1+e^{-j\\omega}\\)。错项忽略一个样值位于0。易错点：线性性质逐项变换后再做代数化简。')
  ],

  '5.7|concept':[
    q('5.7','concept','DTFT对偶性与CTFT相比需要特别小心什么？','离散时间与连续周期频率的角色互换及周期冲激表示',[wrong('DTFT没有任何对偶关系','WRONG_DUALITY_FACTOR'),wrong('对偶后频谱不再周期','WRONG_PERIOD'),wrong('对偶只适用于因果序列','CAUSALITY_ERROR')],'正确：DTFT两域类型不同，对偶表达需处理周期延拓与冲激。错项否认性质或加无关条件。易错点：不能逐字照搬CTFT对偶公式。')
  ],
  '5.7|error_discrimination':[
    q('5.7','error_discrimination','学生把CTFT对偶公式 \\(X(jt)\\leftrightarrow2\\pi x(-\\omega)\\) 原样套到DTFT。核心风险是什么？','忽略了DTFT频域 \\(2\\pi\\) 周期且两域一个离散一个连续',[wrong('只漏了复共轭','IGNORED_CONJUGATE_SYMMETRY'),wrong('只漏了时间延迟','WRONG_SHIFT_DIRECTION'),wrong('只需把 \\(2\\pi\\) 改成N','WRONG_MOD_N')],'正确：DTFT对偶需以周期序列/冲激列形式精确定义，不能照搬CTFT。错项把结构差异缩成单一符号。易错点：先确认两边自变量类型。')
  ],

  '5.8|concept':[
    q('5.8','concept','由常系数差分方程求离散LTI系统频率响应的标准步骤是什么？','令每个延时 \\(x[n-k]\\)、\\(y[n-k]\\) 分别乘 \\(e^{-j\\omega k}\\)，再求 \\(Y/X\\)',[wrong('把每个延时替换为 \\(j\\omega\\)','CONFUSE_CT_DT'),wrong('只变换输入侧延时','OUTPUT_NOT_DIFFERENTIATED'),wrong('把所有延时项直接相加为1','WRONG_DELAY_FACTOR')],'正确：DTFT时移性质把差分方程化为代数式，再取输出输入比。错项混入连续微分或漏变换项。易错点：正延时k对应负指数 \\(e^{-j\\omega k}\\)。')
  ]
};

export const chapter5Catalog:ChapterCatalog=(section,subtype,index)=>choose(catalog[`${section}|${subtype}`]??[],index,`chapter5 ${section}|${subtype}`);
