export interface ProductItem {
	id: string;
	category: string;
	name: string;
	tagline: string;
	description: string;
	highlights: string[];
	serviceMode: string;
	entryLabel: string;
	entryHref: string;
	featured?: boolean;
}

export interface ProductFaq {
	question: string;
	answer: string;
}

export const products: ProductItem[] = [
	{
		id: 'painting-plan',
		category: '智能排产软件',
		name: '涂装生产计划自动生成系统',
		tagline: '面向涂装车间的智能自动排产与计划优化软件',
		description:
			'综合考虑颜色切换成本、产线节拍、交期优先级与工艺约束，一键自动生成高可执行性的涂装生产计划，显著降低换色清洗损耗与人工排产耗时。',
		highlights: [
			'多约束智能排产：自动平衡换色成本、产能负荷与订单交期',
			'快速导入导出：支持常见工单表格导入与排产计划一键导出',
			'灵活服务方式：支持在线按次体验、按时长订阅及企业私有化部署',
			'可扩展对接：支持与现有 MES / ERP / 产线系统数据互通',
		],
		serviceMode: '支持免费体验与按次 / 按时长订阅（线上入口预留）',
		entryLabel: '预约体验 / 进入软件入口',
		entryHref: '/contact',
		featured: true,
	},
	{
		id: 'ai-vision-platform',
		category: 'AI 开发平台',
		name: 'AI 标注 · 训练 · 推理一体平台',
		tagline: '工业视觉模型全生命周期管理工具',
		description:
			'打通工业缺陷与目标检测场景的数据标注、模型训练、评估对比与边缘端推理部署全流程，帮助制造企业低门槛构建自有视觉 AI 能力。',
		highlights: [
			'可视化标注工作台：支持目标检测、分割与分类标注',
			'模型训练与版本管理：一键启动训练与精度回溯对比',
			'多端推理部署：适配工业工控机、边缘盒子与本地 GPU 服务器',
		],
		serviceMode: '支持项目授权 / 本地服务器部署',
		entryLabel: '查看标注模块',
		entryHref: '/tech/annotation',
	},
	{
		id: 'vision-suite',
		category: '机器视觉软件',
		name: '工业视觉检测软件套件',
		tagline: '深度学习与传统机器视觉融合检测引擎',
		description:
			'结合深度学习算法、OpenCV 传统视觉与海康威视 VM 生态，覆盖定位、识别、缺陷检测、尺寸测量与行为识别等典型产线工位需求。',
		highlights: [
			'高精度视觉算法：适配复杂反光、微小划痕与多品类混线场景',
			'PLC / MES 实时通讯：检测结果毫秒级反馈至产线控制与追溯系统',
			'成熟案例验证：已在能力中心行为识别、装货检测等现场稳定运行',
		],
		serviceMode: '支持按产线 / 工位授权与定制交付',
		entryLabel: '查看视觉方案',
		entryHref: '/solutions#vision',
	},
	{
		id: 'eol-plugin',
		category: '工业数据采集',
		name: 'EOL 多源数据采集插件',
		tagline: '面向下线测试与传感器集成的模块化采集组件',
		description:
			'以插件化架构统一接入工业 2D/3D 相机、深度相机、雷达、光色仪等异构传感设备，为产线 EOL 测试与质量追溯提供高可靠数据底座。',
		highlights: [
			'插件式驱动扩展：快速适配主流工业传感器与视觉硬件',
			'同步高速采集：保障多通道检测数据与工件条码精准绑定',
			'质量分析联动：无缝对接下游机器学习与包络线质量分析模块',
		],
		serviceMode: '支持标准组件授权与定制驱动开发',
		entryLabel: '查看 EOL 详情',
		entryHref: '/tech/eol',
	},
	{
		id: 'fms',
		category: '产线与设备管理',
		name: 'FMS 柔性产线与设备管理系统',
		tagline: '覆盖设备状态监控、生产调度与 MES 协同的工业管理软件',
		description:
			'结合 PLC 底层通讯与 Ignition / Web 工业可视化能力，实时掌控设备运行状态、稼动率与生产进度，实现透明化车间运营。',
		highlights: [
			'设备全生命周期台账与异常实时告警',
			'产线看板可视化：实时呈现 OEE、节拍与关键工艺参数',
			'深度集成经验：具备 Ignition 与 MES 产线级项目落地经验',
		],
		serviceMode: '支持企业私有化部署与定制实施',
		entryLabel: '查看管理方案',
		entryHref: '/solutions#management',
	},
];

export const productFaqs: ProductFaq[] = [
	{
		question: '如何试用“涂装生产计划自动生成系统”或其他软件产品？',
		answer:
			'我们正在开放线上软件试用入口，同时支持一对一远程产品演示与免费可行性评估。您可以直接通过「联系我们」页面或右下角客服通道预约体验。',
	},
	{
		question: '产品支持哪些授权与合作模式？',
		answer:
			'根据产品形态不同，提供在线按次 / 按时长灵活订阅（适用于标准排产等软件工具）、按产线/工位买断授权，以及面向大型制造企业的私有化部署与定制开发。',
	},
	{
		question: '软件能否与工厂现有的 PLC、MES 或 ERP 系统对接？',
		answer:
			'可以。我们的视觉、采集与排产软件均预留标准工业协议与 API 接口，具备丰富的 PLC/MES 通讯及 Ignition 产线集成落地经验。',
	},
	{
		question: '遇到技术选型或具体产线问题时，如何获得解答？',
		answer:
			'您可以通过「联系我们」留下场景需求，或通过即将上线的在线 AI 客服与企业微信人工技术顾问实时沟通，我们将在工作日快速响应。',
	},
];
