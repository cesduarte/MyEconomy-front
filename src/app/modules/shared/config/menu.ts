import { IMenuItem } from "src/app/core/interfaces/menu-item";

export const MENU_ITEMS: IMenuItem[] =[
	{
		key: "home",
		label: "Home",
		isTitle: false,
		icon: "dashboard",
		link: "/home",
	},
    {
		key: "category",
		label: "Categorias",
		isTitle: false,
		icon: "notes",
		link: "/category",
	},
    {
		key: "despesas",
		label: "Despesas",
		isTitle: false,
		icon: "monetization_on",
		link: "expense",
	},
    {
		key: "plano",
		label: "Plano",
		isTitle: false,
		icon: "money",
		link: "",
	},
    {
		key: "relatorio",
		label: "Relatório",
		isTitle: false,
		icon: "print",
		link: "",
	},
    {
		key: "user",
		label: "Usuários",
		isTitle: false,
		icon: "people",
		link: "user",
	},
    {
		key: "perfil",
		label: "Perfil",
		isTitle: false,
		icon: "list",
		link: "/user/profile/",
	},
  {
		key: "management",
		label: "Gerenciamento",
		isTitle: false,
		icon: "list",
		link: "management",
	},
]
