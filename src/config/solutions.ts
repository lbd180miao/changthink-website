export interface SolutionCase {
	name: string;
	category: string;
	techRoute: string;
	summary: string;
}

export interface SolutionArea {
	id: string;
	label: string;
	enLabel: string;
	tagline: string;
	description: string;
	capabilities: string[];
	techStack: string[];
	cases: SolutionCase[];
	relatedProduct?: { label: string; href: string };
}

export const solutionAreas: SolutionArea[] = [
	{
		id: 'vision',
		label: '机器视觉',
		enLabel: 'Machine Vision',
		tagline: '深度学习与传统视觉融合，打通定位、识别、检测与产线通讯',
		description:
			'针对制造现场的外观缺陷检测、目标识别定位与作业行为监控等场景，将深度学习算法、OpenCV 与海康威视 VM 生态深度结合，并与 PLC / MES 实时联动，实现高精度自动化质检与防错。',
		capabilities: ['目标检测与定位', '表面缺陷检测', '作业行为识别', 'PLC / MES 实时通讯防错'],
		techStack: ['深度学习', 'OpenCV 机器视觉', '海康威视 VM', 'PLC / MES 协议集成'],
		cases: [
			{
				name: '标注 · 训练 · 推理一体平台',
				category: '目标检测 · 深度学习',
				techRoute: '深度学习闭环',
				summary: '覆盖工业数据集标注、模型迭代训练与产线边缘端部署，加速新缺陷类别的快速上线。',
			},
			{
				name: '延锋能力中心与行为识别项目',
				category: '缺陷检测与行为识别',
				techRoute: '深度学习 + OpenCV',
				summary: '结合计算机视觉对产线作业规范与关键质量工位进行智能识别与实时反馈。',
			},
			{
				name: '产线装货检测项目',
				category: '视觉识别 + 设备联动',
				techRoute: '海康威视 VM + PLC/MES 通讯',
				summary: '实时核验装货完整性与错漏装情况，并将结果同步至 PLC 与 MES 实现自动拦截追溯。',
			},
		],
		relatedProduct: { label: '查看工业视觉软件套件', href: '/products#vision-suite' },
	},
	{
		id: 'acquisition',
		label: '数据采集',
		enLabel: 'Data Acquisition',
		tagline: '插件化多源传感接入，构建高精度产线感知底座',
		description:
			'通过标准化插件架构统一接入 2D/3D 工业相机、深度相机、雷达与光色仪等多种传感设备，解决产线异构设备协议复杂、同步采集难与测试数据分散的痛点。',
		capabilities: ['工业 2D / 3D 相机接入', '深度相机与点云采集', '雷达与光色仪传感集成', '多通道同步数据落盘'],
		techStack: ['插件化采集架构', '工业相机 SDK', '传感器信号分析', '高速数据总线'],
		cases: [
			{
				name: 'EOL 下线测试数据采集项目',
				category: '下线测试 · 多源传感',
				techRoute: '插件化采集框架 + 传感器分析',
				summary: '集成多类工业相机与传感器，实现产品下线环节的自动化数据采集、绑定与质量判定。',
			},
		],
		relatedProduct: { label: '查看 EOL 采集插件', href: '/products#eol-plugin' },
	},
	{
		id: 'analysis',
		label: '数据分析',
		enLabel: 'Industrial Analytics',
		tagline: '基于工艺曲线与时序数据的机器学习质量洞察',
		description:
			'深度挖掘产线设备运行曲线、工艺参数与检测记录中的隐含规律，利用机器学习与深度学习模型实现异常预警、工艺质量判别与良率优化。',
		capabilities: ['工艺曲线特征提取', '机器学习异常判别', '深度学习质量预测', '生产数据挖掘与追溯'],
		techStack: ['机器学习建模', '深度学习时序分析', '包络线特征分析', '工业数据挖掘'],
		cases: [
			{
				name: '超声波焊接质量分析（包络线分析项目）',
				category: '焊接质检 · 数据挖掘',
				techRoute: '机器学习 + 工艺包络线分析',
				summary: '对超声波焊接过程曲线进行包络线建模与智能判别，精准识别虚焊、过焊等隐性缺陷。',
			},
		],
	},
	{
		id: 'management',
		label: '管理系统',
		enLabel: 'Manufacturing Systems',
		tagline: '从产线控制可视化到智能排产的数字化运营闭环',
		description:
			'围绕制造执行（MES）、设备管理（FMS）、生产监控与自动排产需求，融合 PLC、Ignition 工业平台与现代 Web 开发，帮助工厂降低人工排产成本、提升设备稼动率与交付透明度。',
		capabilities: ['MES 制造执行协同', 'FMS 设备状态管理', 'Ignition / Web 生产看板', '多约束自动排产优化'],
		techStack: ['PLC 通讯', 'Ignition 工业平台', 'Web 全栈系统', '智能排产优化算法'],
		cases: [
			{
				name: '零跑 Ignition 产线数字化项目',
				category: '生产管理 · 产线集成',
				techRoute: 'PLC + Ignition + Web 开发',
				summary: '打通底层 PLC 设备数据与上层生产监控界面，实现产线状态透明化管理与高效协同。',
			},
			{
				name: 'FMS 柔性制造与设备管理系统',
				category: '设备管理 · 透明运营',
				techRoute: '设备通讯 + Web 管理平台',
				summary: '统一管理多台工业设备的运行状态、告警日志与维保计划，持续提升产线综合效率。',
			},
			{
				name: '涂装生产计划自动生成系统',
				category: '自动排产 · 智能优化',
				techRoute: '多约束排产算法 + 软件服务',
				summary: '综合换色成本、交期与工艺约束自动生成最优涂装排产计划，大幅减少人工编排工作量。',
			},
		],
		relatedProduct: { label: '了解涂装自动排产系统', href: '/products#painting-plan' },
	},
];
