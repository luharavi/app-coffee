/**
 * Everything about the café that is not the menu. Edit here, not in the pages.
 * Values marked TODO are placeholders — confirm them before publishing.
 */
export const site = {
  name: "Sun Day",
  tagline: "Café, plantas e gatos.",
  description:
    "Cafeteria na Vila Mariana com brunch no fim de semana, tardes de pintura no Art Café e gatos que aceitam carinho.",

  address: {
    street: "Endereço completo em breve", // TODO: rua e número
    district: "Vila Mariana",
    city: "São Paulo – SP",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sun+Day+caf%C3%A9+Vila+Mariana+S%C3%A3o+Paulo", // TODO: link do lugar
  },

  // TODO: confirmar horários
  hours: [
    { days: "Terça a sexta", time: "8h às 18h" },
    { days: "Sábado e domingo", time: "9h às 19h" },
    { days: "Segunda", time: "Fechado" },
  ],

  whatsapp: "5511900000000", // TODO: número real, só dígitos com DDI e DDD
  instagram: "sundaycafe.sp", // TODO: usuário real, sem @

  brunch: {
    when: "Sábado e domingo, das 9h às 14h",
    intro:
      "Pão de fermentação natural, ovos do jeito que você pedir e café coado na hora. Mesas perto da janela, onde bate sol de manhã.",
    highlights: ["torrada-abacate", "croissant-presunto-queijo", "pao-de-queijo", "bolo-cenoura"],
  },

  artCafe: {
    priceCents: 8900, // TODO: confirmar valor
    when: "Quintas, sábados e domingos, às 15h",
    duration: "2h30",
    seats: 12,
    // Weekly sessions; the reservation form offers these.
    sessions: [
      { id: "qui", label: "Quinta, 15h" },
      { id: "sab", label: "Sábado, 15h" },
      { id: "dom", label: "Domingo, 15h" },
    ],
    steps: [
      { title: "Escolha uma tarde", text: "Reserve sua vaga pelo formulário. Confirmamos pelo WhatsApp." },
      { title: "Peça seu café", text: "Uma bebida e um doce do cardápio já estão incluídos." },
      { title: "Pinte sem pressa", text: "Uma artista da casa sugere um tema, mostra a técnica e circula pelas mesas." },
      { title: "Leve para casa", text: "Sua tela sai embrulhada em papel kraft, pronta para pendurar." },
    ],
    included: [
      "Tela 30 × 40 cm, pincéis e tinta acrílica",
      "Avental e todo o material de limpeza",
      "Uma bebida e um doce à sua escolha",
      "Orientação de uma artista durante a tarde",
    ],
  },

  // TODO: trocar pelos gatos reais. `photo` é o arquivo esperado em public/fotos.
  cats: [
    {
      name: "Mel",
      coat: "Laranja",
      about: "Dorme na samambaia da janela e só acorda quando ouve o moedor de café.",
      photo: "gato-mel.jpg",
    },
    {
      name: "Grão",
      coat: "Preto",
      about: "Recepcionista oficial. Senta na cadeira vazia mais próxima de quem acabou de chegar.",
      photo: "gato-grao.jpg",
    },
    {
      name: "Jabuticaba",
      coat: "Tricolor",
      about: "Tímida no começo. Se você ficar quietinho, ela deita no seu pé.",
      photo: "gato-jabuticaba.jpg",
    },
    {
      name: "Nhoque",
      coat: "Branco e cinza",
      about: "Adora o Art Café. Já assinou algumas telas com a pata.",
      photo: "gato-nhoque.jpg",
    },
  ],

  catRules: [
    "Deixe que eles venham até você.",
    "Carinho sim, colo não.",
    "Não ofereça comida, nem um pedacinho.",
    "Fotos sem flash.",
    "Crianças fazem carinho junto com um adulto.",
  ],
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
