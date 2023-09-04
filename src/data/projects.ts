export interface ProjectsI {
  title: string
  companyName: string
  customerName: string
  review: string
  id: string,
  website:string,
  images: image[]
}

export interface image {
  type: 'imgOneCol' | 'imgTwoCol'
  src?: string[]
}

export const projects: ProjectsI[] = [
  {
    title: 'Web design and development',
    companyName: 'Bewitched By Bhavyaa',
    customerName: 'Bhavyaa Kumar',
    website: 'https://bewitchedbybhavyaa.vercel.app/',
    review:
      'Could it have gotten any better? I mean so many hours of brainstorming and clashes you finally made this beautiful website🌻. Thank you so much! I love the colors. I love the illustrations that you have added. So APT! Gonna bring in more tasks for you, haha. You are on my list now!✅',
    id: 'bbb',
    images: [
      { type: 'imgOneCol', src: ['/projects/bbb/bbb_1.png'] },
      {
        type: 'imgTwoCol',
        src: ['/projects/bbb/bbb_2.png', '/projects/bbb/bbb_3.png'],
      },
      {
        type: 'imgTwoCol',
        src: ['/projects/bbb/bbb_4.png', '/projects/bbb/bbb_5.png'],
      },
    ],
  },
  {
    title: 'Web design and development',
    companyName: 'Utilities Save',
    customerName: 'Dipesh Mathur',
    website: 'https://utilitiessave.com/',
    review:
      'Revolutionized our online experience! The energy-saving solutions are now beautifully showcased on the revamped website. The new look and feel are not only visually appealing but also user-friendly, making it easier for users to explore the new products. A seamless blend of design and functionality!',
    id: 'uti',
    images: [
      { type: 'imgOneCol', src: ['/projects/utilitiessave/utilitiessave_1.png'] },
      {
        type: 'imgTwoCol',
        src: ['/projects/utilitiessave/utilitiessave_2.png', '/projects/utilitiessave/utilitiessave_3.png'],
      },
      {
        type: 'imgTwoCol',
        src: ['/projects/utilitiessave/utilitiessave_4.png', '/projects/utilitiessave/utilitiessave_5.png'],
      },
    ],
  },
  {
    title: 'Web design and development',
    companyName: 'Srimitra India',
    customerName: 'Reshma',
    website: 'https://www.srimitraindia.com/',
    review:
      'Absolutely thrilled with the end result! Our collaborative effort has yielded a stunning website for the orphan portal. The captivating colors and exquisite illustrations are spot on. Kudos to the team for their dedication and creativity. Looking forward to entrusting more projects. A definite asset on our list!',
    id: 'sri',
    images: [
      { type: 'imgOneCol', src: ['/projects/srimitra/srimitra_1.png'] },
      {
        type: 'imgTwoCol',
        src: ['/projects/srimitra/srimitra_2.png', '/projects/srimitra/srimitra_3.png'],
      },
      {
        type: 'imgTwoCol',
        src: ['/projects/srimitra/srimitra_4.png', '/projects/srimitra/srimitra_5.png'],
      },
    ],
  },
]
