import type { ChapterCatalog, DraftSpec } from './phase1-types.ts';
import { choose, wrong } from './phase1-types.ts';

const catalog:Record<string,DraftSpec[]>={
  '1.1|concept':[
    {blueprint_section:'1.1',subtype:'concept',stem:'关于能量信号与功率信号，下列说法正确的是哪一项？',correct:'非零有限能量信号的平均功率为0',wrong:[wrong('所有功率信号的能量都有限','CONFUSE_ENERGY_POWER'),wrong('能量信号一定是周期信号','CONFUSE_ENERGY_POWER'),wrong('只要平均功率为0，信号就恒为0','CONFUSE_ENERGY_POWER')],explanation:'正确：有限能量除以无限观察时长后平均功率为0。错项混淆了能量、功率与周期性。易错点：平均功率为0不代表信号处处为0。'},
    {blueprint_section:'1.1',subtype:'concept',stem:'非零周期连续时间信号，若一周期能量有限且非零，则该信号通常属于哪一类？',correct:'功率信号，能量为无穷',wrong:[wrong('能量信号，平均功率为0','CONFUSE_ENERGY_POWER'),wrong('既是能量信号又是功率信号','CONFUSE_ENERGY_POWER'),wrong('既不是能量信号也不是功率信号','CONFUSE_ENERGY_POWER')],explanation:'正确：非零周期信号的有限周期能量会无限重复，总能量发散而平均功率有限。错项把单周期能量当成总能量。易错点：周期信号的功率应在一个周期内求平均。'}
  ],
  '1.1|error_discrimination':[
    {blueprint_section:'1.1',subtype:'error_discrimination',stem:'计算复信号能量时，哪一个积分式正确？',correct:'\\(E=\\int_{-\\infty}^{\\infty}|x(t)|^2dt\\)',wrong:[wrong('\\(E=\\int_{-\\infty}^{\\infty}x(t)dt\\)','FORGOT_MAGNITUDE_SQUARED'),wrong('\\(E=\\int_{-\\infty}^{\\infty}|x(t)|dt\\)','FORGOT_MAGNITUDE_SQUARED'),wrong('\\(E=\\left|\\int_{-\\infty}^{\\infty}x(t)dt\\right|^2\\)','FORGOT_MAGNITUDE_SQUARED')],explanation:'正确：信号能量由模平方积分定义。错项分别漏掉平方、只取模或先积分后平方。易错点：复信号必须使用 \\(x(t)x^*(t)\\)。'},
    {blueprint_section:'1.1',subtype:'error_discrimination',stem:'离散信号 \\(x[n]=(1/2)^nu[n]\\) 的能量求和应从哪里开始？',correct:'\\(E=\\sum_{n=0}^{\\infty}(1/4)^n\\)',wrong:[wrong('\\(E=\\sum_{n=-\\infty}^{\\infty}(1/2)^n\\)','FORGOT_MAGNITUDE_SQUARED'),wrong('\\(E=\\sum_{n=0}^{\\infty}(1/2)^n\\)','FORGOT_MAGNITUDE_SQUARED'),wrong('\\(E=\\sum_{n=-\\infty}^{0}(1/4)^n\\)','WRONG_SUPPORT_INTERVAL')],explanation:'正确：\\(u[n]\\) 限定 \\(n\\ge0\\)，且能量使用模平方，所以底数变为 \\(1/4\\)。错项忽略支撑或平方。易错点：先确定非零区间，再取模平方。'}
  ],
  '1.2|concept':[
    {blueprint_section:'1.2',subtype:'concept',stem:'若 \\(x(t)\\) 是偶信号，则下列关系必成立的是哪一个？',correct:'\\(x(-t)=x(t)\\)',wrong:[wrong('\\(x(-t)=-x(t)\\)','SIGN_ERROR'),wrong('\\(x(t+T)=x(t)\\)','WRONG_PERIOD'),wrong('\\(x^*(t)=x(t)\\)','IGNORED_CONJUGATE_SYMMETRY')],explanation:'正确：偶信号关于纵轴对称，定义为 \\(x(-t)=x(t)\\)。错项分别描述奇性、周期性和实值性。易错点：偶性不要求信号为实数。'},
    {blueprint_section:'1.2',subtype:'concept',stem:'连续时间信号 \\(\\cos(6t+\\phi)\\) 的基本周期是多少？',correct:'\\(T_0=\\pi/3\\)',wrong:[wrong('\\(T_0=6\\pi\\)','WRONG_FREQUENCY_SCALE'),wrong('\\(T_0=1/6\\)','MISSING_2PI'),wrong('\\(T_0=3/\\pi\\)','WRONG_FREQUENCY_SCALE')],explanation:'正确：角频率为6，周期为 \\(2\\pi/6=\\pi/3\\)。错项把角频率当普通频率或取倒数错误。易错点：相位 \\(\\phi\\) 不改变周期。'},
    {blueprint_section:'1.2',subtype:'concept',stem:'离散时间正弦 \\(\\cos(\\Omega_0n)\\) 为周期信号的条件是什么？',correct:'存在正整数 \\(N,m\\)，使 \\(\\Omega_0N=2\\pi m\\)',wrong:[wrong('只要 \\(\\Omega_0\\ne0\\) 就周期','WRONG_PERIOD'),wrong('存在实数 \\(N\\)，使 \\(\\Omega_0N=2\\pi\\)','WRONG_PERIOD'),wrong('\\(\\Omega_0/\\pi\\) 必须是无理数','WRONG_PERIOD')],explanation:'正确：离散序列要求整数位移后相位增加整数个 \\(2\\pi\\)。错项忽略了周期必须为正整数。易错点：连续正弦总周期，离散正弦未必周期。'},
    {blueprint_section:'1.2',subtype:'concept',stem:'由任意信号 \\(x(t)\\) 构造其偶部，正确表达式是哪一个？',correct:'\\(x_e(t)=\\frac12[x(t)+x(-t)]\\)',wrong:[wrong('\\(x_e(t)=x(t)+x(-t)\\)','MISS_FACTOR_2'),wrong('\\(x_e(t)=\\frac12[x(t)-x(-t)]\\)','SIGN_ERROR'),wrong('\\(x_e(t)=x(-t)\\)','MISSING_TIME_REVERSAL')],explanation:'正确：原信号与反转信号相加后除以2得到偶部。错项漏掉二分之一、写成奇部或只做反转。易错点：偶部与奇部之和才还原原信号。'}
  ],
  '1.2|formula':[
    {blueprint_section:'1.2',subtype:'formula',stem:'若 \\(x(t)\\) 的基本周期为 \\(T_0\\)，且 \\(a\\ne0\\)，则 \\(x(at)\\) 的基本周期为多少？',correct:'\\(T_0/|a|\\)',wrong:[wrong('\\(|a|T_0\\)','WRONG_FREQUENCY_SCALE'),wrong('\\(T_0/a\\)','MISSING_ABSOLUTE_VALUE'),wrong('\\(T_0+a\\)','WRONG_PERIOD')],explanation:'正确：令时间伸缩后的自变量增加一个原周期，需要 \\(|a|T=T_0\\)。错项把伸缩方向写反或漏掉绝对值。易错点：负 \\(a\\) 还包含反转，但周期必须为正。'}
  ],
  '1.2|error_discrimination':[
    {blueprint_section:'1.2',subtype:'error_discrimination',stem:'已知 \\(x(t)\\) 在 \\(t=2\\) 有一处特征点。信号 \\(x(3-t)\\) 的对应特征点位于哪里？',correct:'\\(t=1\\)',wrong:[wrong('\\(t=-1\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(t=5\\)','MISSING_TIME_REVERSAL'),wrong('\\(t=6\\)','WRONG_FREQUENCY_SCALE')],explanation:'正确：令 \\(3-t=2\\)，得 \\(t=1\\)。错项常来自只平移不反转或机械乘尺度。易错点：复合自变量应直接令其等于原特征点。'},
    {blueprint_section:'1.2',subtype:'error_discrimination',stem:'学生称 \\(x[-n+4]\\) 是“把 \\(x[n]\\) 向右移4点”。核心错误是什么？',correct:'遗漏时间反转；应先反转再按结果定位平移',wrong:[wrong('平移方向正确，只漏了幅度缩放','MISS_SCALE_FACTOR'),wrong('离散时间信号不能做反转','CONFUSE_CT_DT'),wrong('应理解为向左移4点且不反转','WRONG_SHIFT_DIRECTION')],explanation:'正确：\\(-n+4=-(n-4)\\)，包含反转与右移4点。错项忽略反转或误判离散操作。易错点：先把自变量整理成 \\(a(n-n_0)\\)。'}
  ],
  '1.3|concept':[
    {blueprint_section:'1.3',subtype:'concept',stem:'连续时间复指数 \\(e^{(\\sigma+j\\omega_0)t}\\) 的包络由什么决定？',correct:'\\(e^{\\sigma t}\\)',wrong:[wrong('\\(e^{j\\omega_0t}\\)','CONFUSE_ENVELOPE_PHASE'),wrong('\\(\\cos\\sigma t\\)','WRONG_FREQUENCY_SCALE'),wrong('\\(e^{\\omega_0t}\\)','WRONG_FREQUENCY_SCALE')],explanation:'正确：实部 \\(\\sigma\\) 控制指数增长或衰减，虚部控制振荡。错项把相位项当包络或交换参数。易错点：\\(\\sigma<0\\) 才是随时间衰减。'},
    {blueprint_section:'1.3',subtype:'concept',stem:'离散复指数 \\(e^{j\\Omega_0n}\\) 与 \\(e^{j(\\Omega_0+2\\pi)n}\\) 的关系是什么？',correct:'两者对所有整数 \\(n\\) 完全相同',wrong:[wrong('两者角频率不同，因此一定不同','CONFUSE_CT_DT'),wrong('仅在 \\(n=0\\) 相同','WRONG_PERIOD'),wrong('两者互为共轭','IGNORED_CONJUGATE_SYMMETRY')],explanation:'正确：整数 \\(n\\) 使 \\(e^{j2\\pi n}=1\\)，离散角频率按 \\(2\\pi\\) 等价。错项套用了连续时间直觉。易错点：离散频率存在模 \\(2\\pi\\) 的等价类。'},
    {blueprint_section:'1.3',subtype:'concept',stem:'实正弦 \\(A\\cos(\\omega_0t+\\phi)\\) 的复指数分解中，两项系数的关系是什么？',correct:'互为共轭，模均为 \\(|A|/2\\)',wrong:[wrong('两项系数都等于 \\(A\\)','MISS_FACTOR_2'),wrong('两项系数互为相反数','SIGN_ERROR'),wrong('只保留正频率项即可保持实信号','IGNORED_CONJUGATE_SYMMETRY')],explanation:'正确：欧拉展开给出一对共轭的正、负频率系数，各带二分之一。错项漏因子2或破坏实信号的共轭配对。易错点：相位在两项中符号相反。'}
  ],
  '1.3|error_discrimination':[
    {blueprint_section:'1.3',subtype:'error_discrimination',stem:'判断 \\(x[n]=e^{j\\pi n/\\sqrt2}\\) 是否周期。正确结论是什么？',correct:'非周期，因为 \\((\\pi/\\sqrt2)/(2\\pi)\\) 为无理数',wrong:[wrong('周期为 \\(2\\sqrt2\\)','WRONG_PERIOD'),wrong('周期为 \\(2\\pi\\sqrt2\\)','WRONG_PERIOD'),wrong('所有离散复指数都周期','CONFUSE_CT_DT')],explanation:'正确：离散复指数周期要求 \\(\\Omega_0/(2\\pi)\\) 为有理数。错项允许非整数周期或照搬连续时间结论。易错点：离散周期 \\(N\\) 必须是整数。'}
  ],
  '1.4|concept':[
    {blueprint_section:'1.4',subtype:'concept',stem:'冲激抽样性质 \\(x(t)\\delta(t-t_0)\\) 的结果是哪一个？',correct:'\\(x(t_0)\\delta(t-t_0)\\)',wrong:[wrong('\\(x(t)\\delta(t_0)\\)','CONFUSE_IMPULSE_STEP'),wrong('\\(x(t-t_0)\\delta(t)\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(x(0)\\delta(t-t_0)\\)','WRONG_SHIFT_DIRECTION')],explanation:'正确：冲激只保留 \\(t=t_0\\) 处的信号值。错项在错误位置取样或移动了冲激。易错点：冲激的位置决定被抽取的自变量值。'},
    {blueprint_section:'1.4',subtype:'concept',stem:'单位阶跃与单位冲激在连续时间中的基本关系是什么？',correct:'\\(\\frac{d}{dt}u(t)=\\delta(t)\\)',wrong:[wrong('\\(\\frac{d}{dt}\\delta(t)=u(t)\\)','CONFUSE_IMPULSE_STEP'),wrong('\\(u(t)=t\\delta(t)\\)','CONFUSE_IMPULSE_STEP'),wrong('\\(\\int_{-\\infty}^{t}u(\\tau)d\\tau=\\delta(t)\\)','FORGOT_INTEGRATION')],explanation:'正确：阶跃在原点的广义导数是冲激。错项颠倒微分积分关系或误用乘积。易错点：\\(u\\) 是 \\(\\delta\\) 从负无穷的积分。'},
    {blueprint_section:'1.4',subtype:'concept',stem:'积分 \\(\\int_{-\\infty}^{\\infty}(t+1)\\delta(t-2)dt\\) 的值是多少？',correct:'\\(3\\)',wrong:[wrong('\\(1\\)','WRONG_SHIFT_DIRECTION'),wrong('\\(2\\)','WRONG_SAMPLING_VALUE'),wrong('\\(0\\)','CONFUSE_IMPULSE_STEP')],explanation:'正确：抽样性质把 \\(t\\) 取为2，得到 \\(2+1=3\\)。错项在0处取值、只取冲激位置或认为普通点积分为0。易错点：含冲激的积分不能按普通函数“单点面积为0”处理。'}
  ],
  '1.4|error_discrimination':[
    {blueprint_section:'1.4',subtype:'error_discrimination',stem:'学生把 \\(\\int_{-\\infty}^{t}\\delta(\\tau-3)d\\tau\\) 写成 \\(u(t+3)\\)。错在哪里？',correct:'阶跃平移符号写反，应为 \\(u(t-3)\\)',wrong:[wrong('忘记乘以3，应为 \\(3u(t+3)\\)','MISS_SCALE_FACTOR'),wrong('应为 \\(\\delta(t-3)\\)，积分不改变冲激','FORGOT_INTEGRATION'),wrong('积分上限应替换为 \\(\\tau\\)','CONFUSE_IMPULSE_STEP')],explanation:'正确：冲激位于3，累积到 \\(t\\ge3\\) 才跳变，所以是 \\(u(t-3)\\)。错项混淆平移符号或忘记积分。易错点：先看跳变发生在横轴哪个位置。'}
  ],
  '1.5-1.6|concept':[
    {blueprint_section:'1.5-1.6',subtype:'concept',section:'1.6',stem:'系统 \\(y(t)=3x(t)-2\\) 是否线性？',correct:'非线性，因为零输入产生非零输出',wrong:[wrong('线性，因为只含一次方的 \\(x(t)\\)','LINEARITY_ERROR'),wrong('线性，因为满足时不变性','LINEARITY_ERROR'),wrong('是否线性取决于输入是否周期','LINEARITY_ERROR')],explanation:'正确：常数偏置使齐次性失效，特别是零输入输出为-2。错项只看代数次数或混入无关性质。易错点：仿射系统通常不是线性系统。'},
    {blueprint_section:'1.5-1.6',subtype:'concept',section:'1.6',stem:'无记忆系统的输出在时刻 \\(t_0\\) 可以依赖什么？',correct:'只依赖输入在同一时刻 \\(t_0\\) 的值',wrong:[wrong('可以依赖所有过去输入','CONFUSE_MEMORY_CAUSALITY'),wrong('只能依赖未来输入','CAUSALITY_ERROR'),wrong('必须与输入完全相等','LINEARITY_ERROR')],explanation:'正确：无记忆要求当前输出只由当前输入决定。错项把无记忆与因果或恒等系统混淆。易错点：因果系统可有记忆，无记忆系统则必然因果。'},
    {blueprint_section:'1.5-1.6',subtype:'concept',section:'1.6',stem:'离散系统 \\(y[n]=x[n]+x[n-1]\\) 具有哪组性质？',correct:'线性、时不变、因果且有记忆',wrong:[wrong('线性、时变、因果且有记忆','TIME_INVARIANCE_ERROR'),wrong('线性、时不变、非因果且无记忆','CAUSALITY_ERROR'),wrong('非线性、时不变、因果且有记忆','LINEARITY_ERROR')],explanation:'正确：它是当前与过去样本的固定线性组合，平移输入会等量平移输出。错项误判线性、时不变性或记忆性。易错点：出现 \\(x[n-1]\\) 就说明有记忆，但仍可因果。'},
    {blueprint_section:'1.5-1.6',subtype:'concept',section:'1.6',stem:'因果连续时间系统在 \\(t_0\\) 的输出不能依赖哪一项？',correct:'\\(x(t_0+1)\\)',wrong:[wrong('\\(x(t_0)\\)','CAUSALITY_ERROR'),wrong('\\(x(t_0-1)\\)','CAUSALITY_ERROR'),wrong('\\(\\int_{-\\infty}^{t_0}x(\\tau)d\\tau\\)','CAUSALITY_ERROR')],explanation:'正确：\\(x(t_0+1)\\) 是未来输入，因果系统不能使用。错项均只使用当前或过去输入。易错点：积分形式要看积分上限，而不是看到积分就判为非因果。'},
    {blueprint_section:'1.5-1.6',subtype:'concept',section:'1.6',stem:'系统可逆的含义是哪一个？',correct:'由输出可以唯一恢复输入',wrong:[wrong('系统一定是线性的','LINEARITY_ERROR'),wrong('系统一定是因果的','CAUSALITY_ERROR'),wrong('输出一定等于输入','CONFUSE_INVERTIBILITY_IDENTITY')],explanation:'正确：可逆要求不同输入不会产生同一输出，并存在逆系统恢复输入。错项把可逆性与线性、因果或恒等关系混淆。易错点：可逆系统不必线性。'}
  ],
  '1.5-1.6|error_discrimination':[
    {blueprint_section:'1.5-1.6',subtype:'error_discrimination',section:'1.6',stem:'学生认为 \\(y[n]=n x[n]\\) 时不变，因为没有移位项。正确判断是什么？',correct:'系统时变；输入移位后系数仍为 \\(n\\)，而输出移位后的系数为 \\(n-n_0\\)',wrong:[wrong('系统时不变，学生理由正确','TIME_INVARIANCE_ERROR'),wrong('系统非线性，所以无法判断时不变性','LINEARITY_ERROR'),wrong('系统非因果，所以一定时变','CAUSALITY_ERROR')],explanation:'正确：显式依赖绝对时间 \\(n\\) 会使移位检验不相等。错项用“无移位项”替代正式检验或混淆不同性质。易错点：线性与时不变性必须分别判断。'},
    {blueprint_section:'1.5-1.6',subtype:'error_discrimination',section:'1.6',stem:'对系统 \\(y(t)=|x(t)|\\)，哪一个性质判断正确？',correct:'非线性、时不变、无记忆且因果',wrong:[wrong('线性、时不变、无记忆且因果','LINEARITY_ERROR'),wrong('非线性、时变、无记忆且因果','TIME_INVARIANCE_ERROR'),wrong('非线性、时不变、有记忆且非因果','CAUSALITY_ERROR')],explanation:'正确：绝对值破坏叠加性，但不显含时间，只用当前输入。错项把非线性误推成时变或非因果。易错点：非线性系统也可以时不变。'},
    {blueprint_section:'1.5-1.6',subtype:'error_discrimination',section:'1.6',stem:'系统 \\(y[n]=x[-n]\\) 的性质判断正确的是哪一项？',correct:'线性、时变、非因果且有记忆',wrong:[wrong('线性、时不变、非因果且有记忆','TIME_INVARIANCE_ERROR'),wrong('非线性、时变、因果且无记忆','LINEARITY_ERROR'),wrong('线性、时变、因果且有记忆','CAUSALITY_ERROR')],explanation:'正确：时间反转保持线性，但不与平移交换；正 \\(n\\) 的输出会取负时刻，而负 \\(n\\) 时可能取未来，因此整体非因果。错项误判了线性、时不变性或因果性。易错点：时间反转不是时不变操作。'}
  ]
};

export const chapter1Catalog:ChapterCatalog=(section,subtype,index)=>
  choose(catalog[`${section}|${subtype}`]??[],index,`chapter1 ${section}|${subtype}`);
