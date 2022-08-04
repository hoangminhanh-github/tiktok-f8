import { MdLanguage } from "react-icons/md";
import { BsQuestionCircle, BsKeyboard } from "react-icons/bs";
import { BiInfoCircle, BiLogIn } from "react-icons/bi";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { RiCoinLine } from "react-icons/ri";
export const MENU_ITEM = [
  {
    icon: <MdLanguage></MdLanguage>,
    title: "English",
    children: {
      title: "language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
          children: {
            title: "hehe",
            data: [
              {
                title: "tv1",
              },
              {
                title: "tv2",
              },
            ],
          },
        },
      ],
    },
  },
  {
    icon: <BsQuestionCircle></BsQuestionCircle>,
    title: "Feedback and Help",
    to: "/following",
  },
  {
    icon: <BsKeyboard></BsKeyboard>,
    title: "Keyboard shortcuts",
    href: "https://fullstack.edu.vn",
  },
];

export const USER_MENU = [
  {
    icon: <AiOutlineUser></AiOutlineUser>,
    title: "View profile",
    // href: "https://fullstack.edu.vn",
  },
  {
    icon: <RiCoinLine></RiCoinLine>,
    title: "Get coins",
    // href: "https://fullstack.edu.vn",
  },
  {
    icon: <AiOutlineSetting></AiOutlineSetting>,
    title: "Settings",
    // href: "https://fullstack.edu.vn",
  },
  ...MENU_ITEM,
  {
    separate: "top-separate",
    icon: <BiLogIn></BiLogIn>,
    title: "Log out",
    // href: "https://fullstack.edu.vn",
  },
];
