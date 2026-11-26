export interface MegaMenuColumn {
	title: string;
	items: { label: string; href: string }[];
}

export interface NavItem {
	href: string;
	label: string;
	megaMenu?: {
		columns: MegaMenuColumn[];
		footerLink?: { label: string; href: string };
	};
}

export const navItems: NavItem[] = [
	{
		href: '/tech',
		label: '技术能力',
		megaMenu: {
			columns: [
				{
					title: 'AI 开发平台',
					items: [
						{ label: '数据标注工具', href: '/tech#ai-platform' },
						{ label: '模型训练管理', href: '/tech#ai-platform' },
						{ label: '推理服务部署', href: '/tech#ai-platform' },
					],
				},
				{
					title: '机器视觉',
					items: [
						{ label: '目标检测', href: '/tech#vision' },
						{ label: '缺陷检测', href: '/tech#vision' },
						{ label: '智能识别', href: '/tech#vision' },
					],
				},
				{
					title: 'PLC / MES 通讯',
					items: [
						{ label: 'PLC 协议对接', href: '/tech#communication' },
						{ label: 'MES 系统集成', href: '/tech#communication' },
						{ label: '实时数据采集', href: '/tech#communication' },
					],
				},
				{
					title: '数据采集',
					items: [
						{ label: '2D/3D 相机', href: '/tech#acquisition' },
						{ label: '深度相机', href: '/tech#acquisition' },
						{ label: '雷达 / 光色仪', href: '/tech#acquisition' },
					],
				},
				{
					title: '数据分析',
					items: [
						{ label: '机器学习建模', href: '/tech#analysis' },
						{ label: '深度学习分析', href: '/tech#analysis' },
						{ label: '数据挖掘', href: '/tech#analysis' },
					],
				},
				{
					title: '管理系统',
					items: [
						{ label: 'MES 制造执行', href: '/tech#management' },
						{ label: '设备管理', href: '/tech#management' },
						{ label: '自动排产', href: '/tech#management' },
					],
				},
			],
			footerLink: { label: '查看全部技术能力', href: '/tech' },
		},
	},
	{
		href: '/solutions',
		label: '解决方案',
		megaMenu: {
			columns: [
				{
					title: '机器视觉方案',
					items: [
						{ label: '目标检测', href: '/solutions#vision' },
						{ label: '缺陷检测', href: '/solutions#vision' },
						{ label: '智能识别', href: '/solutions#vision' },
					],
				},
				{
					title: '数据采集方案',
					items: [
						{ label: '2D/3D 相机', href: '/solutions#acquisition' },
						{ label: '深度相机', href: '/solutions#acquisition' },
						{ label: '雷达 / 光色仪', href: '/solutions#acquisition' },
					],
				},
				{
					title: '数据分析方案',
					items: [
						{ label: '机器学习建模', href: '/solutions#analysis' },
						{ label: '深度学习分析', href: '/solutions#analysis' },
						{ label: '数据挖掘', href: '/solutions#analysis' },
					],
				},
				{
					title: '管理系统方案',
					items: [
						{ label: 'MES 制造执行', href: '/solutions#management' },
						{ label: '设备管理', href: '/solutions#management' },
						{ label: '自动排产', href: '/solutions#management' },
					],
				},
			],
			footerLink: { label: '查看全部解决方案', href: '/solutions' },
		},
	},
	{
		href: '/about',
		label: '关于我们',
		megaMenu: {
			columns: [
				{
					title: '公司介绍',
					items: [
						{ label: '关于炎想科技', href: '/about' },
						{ label: '核心优势', href: '/about#advantages' },
					],
				},
				{
					title: '联系方式',
					items: [
						{ label: 'contact@changthink.com', href: 'mailto:contact@changthink.com' },
						{ label: '地址待补充', href: '/about#contact' },
					],
				},
			],
			footerLink: { label: '了解更多', href: '/about' },
		},
	},
];
