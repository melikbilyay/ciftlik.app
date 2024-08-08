import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
    IconHorseToy,
  IconMeat,
  IconMilk,
  IconUser,
  IconSettings,
  IconNumbers,
  IconHeart,
    IconCalendar,


} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Panel",
  },

  {
    id: uniqueId(),
    title: "Anasayfa",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "ÇİFTLİĞİM",
  },
  {
    id: uniqueId(),
    title: "Hayvanlar",
    icon: IconHorseToy,
    href: "/utilities/animals",
  },
  {
    id: uniqueId(),
    title: "Yem",
    icon: IconMeat,
    href: "/utilities/food",
  },
  {
    id: uniqueId(),
    title: "Süt",
    icon: IconMilk,
    href: "/utilities/milk",
  },
  {
    id: uniqueId(),
    title: "Sağlık",
    icon: IconHeart,
    href: "/utilities/health",
  },
  {
    id: uniqueId(),
    title: "Doğum",
    icon: IconCalendar,
    href: "/utilities/birth",
  },
  {
    id: uniqueId(),
    title: "Sayım",
    icon: IconNumbers,
    href: "/utilities/calculate",
  },
  {
    navlabel: true,
    subheader: "Yönetim",
  },
  {
    id: uniqueId(),
    title: "Kullanıcılar",
    icon: IconUser,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Kullanıcı Ekle",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  {
    navlabel: true,
    subheader: "Ayarlar",
  },

  {
    id: uniqueId(),
    title: "Site Ayarları",
    icon: IconSettings,
    href: "/sample-page",
  },
  {
    id: uniqueId(),
    title: "Geri Bildirim",
    icon: IconMoodHappy,
    href: "/icons",
  },
];

export default Menuitems;
