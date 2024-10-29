import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    // "",
    {
      text: "01",
      prefix: "md/dev-log/",
      children: ["java01.md","java02.md","java03.md","day04.md","day05.md","day06.md","day07~day08.md","day09~day10.md","day11.md","day12.md"],
    }
    ,
    // {
    //   text: "02",
    //   prefix: "md/dev-log/",
    //   children: ["java01.md","java02.md","java03.md","day04.md","day05.md","day06.md","day07~day08.md","day09~day10.md","day11.md","day12.md"],
    // },
    // {
    //   text: "03",
    //   prefix: "md/dev-log/",
    //   children: ["java01.md","java02.md","java03.md","day04.md","day05.md","day06.md","day07~day08.md","day09~day10.md","day11.md","day12.md"],
    // },
    // {
    //   text: "04",
    //   prefix: "md/dev-log/",
    //   children: ["java01.md","java02.md","java03.md","day04.md","day05.md","day06.md","day07~day08.md","day09~day10.md","day11.md","day12.md"],
    // },
  ],

  "/Java" : [
    {
      text: "Java入门",
      prefix: "md/java/",
      children: ["java01.md","java02.md","java03.md"],
    }
  ],

});
