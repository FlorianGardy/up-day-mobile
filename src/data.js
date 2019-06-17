export const users = [
  {
    name: "Jojo",
    password: "1234"
  },
  {
    name: "Laura",
    password: "1234"
  }
];

export const events = [
  {
    id: 1,
    date: "2019-06-04T12:59:00",
    type: "pipi",
    nature: "normale",
    volume: "+++",
    context: "fuite",
    comment: "pipi",
    user_id: "1"
  },
  {
    id: 2,
    date: "2019-06-05T13:59:00",
    type: "pipi",
    nature: "mitigé",
    volume: "+",
    context: "normale",
    comment: "gros pipi",
    user_id: "1"
  },
  {
    id: 3,
    date: "2019-06-05T14:59:00",
    type: "pipi",
    nature: "mitigé",
    volume: "++",
    context: "",
    comment: "",
    user_id: "1"
  },
  {
    id: 4,
    date: "2019-06-05T14:59:00",
    type: "caca",
    nature: "difficulté",
    volume: "+",
    context: "",
    comment: "C'était long...",
    user_id: "1"
  },
  {
    id: 5,
    date: "2019-06-07T11:59:00",
    type: "Boisson",
    nature: "Thé",
    volume: "+++",
    context: "",
    comment: "Avec du miel, miam !",
    user_id: "1"
  }
];

export const drinks = [
  {
    label: "eau",
    value: "eau"
  },
  {
    label: "the",
    value: "the"
  },
  {
    label: "alcohol",
    value: "alcohol"
  }
];

export const volumes = [
  {
    label: "+",
    value: "low"
  },
  {
    label: "++",
    value: "medium"
  },
  {
    label: "+++",
    value: "High"
  }
];

export const urinations = [
  {
    label: "Précaution",
    value: "Précaution"
  },
  {
    label: "Normale",
    value: "Normale"
  },
  {
    label: "Urgence",
    value: "Urgence"
  }
];

export const defecations = [
  {
    label: "Normale",
    value: "Normale"
  },
  {
    label: "Difficulté",
    value: "Difficulté"
  },
  {
    label: "Urgence",
    value: "Urgence"
  }
];

export const contextDefecation = [
  {
    label: "Suite à une fuite",
    value: "Suite à une fuite"
  },
  {
    label: "Suite à des gazs",
    value: "Suite à des gazs"
  }
];
