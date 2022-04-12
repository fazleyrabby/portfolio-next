export const blogPosts = [
    {
        title: 'Blog 1',
        date: new Date().toISOString(),
        slug: 'blog-1',
        content: 'Fames curabitur feugiat imperdiet dictumst sem aptent scelerisque praesent. Porta eget per et pellentesque primis tortor. Praesent consequat finibus suscipit aliquet viverra erat maximus. Maximus sociosqu adipiscing enim sagittis primis faucibus ex eget. Dolor pede purus ligula nulla iaculis placerat vestibulum diam vivamus urna.'
    },
    {
        title: 'Blog 2',
        date: new Date().toISOString(),
        slug: 'blog-2',
        content: 'Faucibus nec ipsum elit tempor sociosqu lacus senectus consectetuer id dis. Pretium ligula inceptos auctor sagittis dolor laoreet hac consectetuer pharetra. Vehicula efficitur netus morbi pulvinar mi litora risus arcu. Fames curabitur feugiat imperdiet dictumst sem aptent scelerisque praesent.'
    },
    {
        title: 'Blog 3',
        date: new Date().toISOString(),
        slug: 'blog-3',
        content: 'Faucibus nec ipsum elit tempor sociosqu lacus senectus consectetuer id dis. Pretium ligula inceptos auctor sagittis dolor laoreet hac consectetuer pharetra. Vehicula efficitur netus morbi pulvinar mi litora risus arcu. Fames curabitur feugiat imperdiet dictumst sem aptent scelerisque praesent.'
    },
    {
        title: 'Blog 4',
        date: new Date().toISOString(),
        slug: 'blog-4',
        content: 'Faucibus nec ipsum elit tempor sociosqu lacus senectus consectetuer id dis. Pretium ligula inceptos auctor sagittis dolor laoreet hac consectetuer pharetra. Vehicula efficitur netus morbi pulvinar mi litora risus arcu. Fames curabitur feugiat imperdiet dictumst sem aptent scelerisque praesent.'
    },
    {
        title: 'Blog 5',
        date: new Date().toISOString(),
        slug: 'blog-5',
        content: 'Faucibus nec ipsum elit tempor sociosqu lacus senectus consectetuer id dis. Pretium ligula inceptos auctor sagittis dolor laoreet hac consectetuer pharetra. Vehicula efficitur netus morbi pulvinar mi litora risus arcu. Fames curabitur feugiat imperdiet dictumst sem aptent scelerisque praesent.'
    }
]

export const experiences = [
    {
        name: 'Amcoders',
        link: '#',
        from: 'Jan 2021',
        to: 'July 2021',
        role: 'Laravel Developer',
        contributions: ['Building Backend Web app with Laravel',
        'Payment Gateway Integration (Stripe, Paypal)',
        'Two Step Authentication, Multi Auth,Email queue',
        'Custom Middleware Implementation',
        'CV Builder with Jquery and Ajax',
        'Multiple API Integration (Mailchimp, Twilio)',
        'Dynamic Kanban Layout for project management with Jquery UI',
        'Bus Seat Management with Javascript',
        ],
        timeline: new Date("2021-07-06")
    },
    {
        name: 'Electronic First FZ LLE',
        link: '#',
        from: 'October 2021',
        to: 'Present',
        role: 'Software Engineer',
        contributions: ['Backend Maintenance','Adding New Features','Software version upgrades','Debugging existing errors','Code / Query optimization'],
        timeline: new Date("2021-10-15")
    } 
]

export const uses = [
    {
        title: 'Editor',
        items: [
            'VS Code',
            'Bearded Theme',
            'Fira Code Nerd Font',
            'Bash with Starship Prompt',
            'PHPStorm',
            'DataGrip',
        ],
    },
    {
        title: 'Setup',
        items: [
            'Lenovo Ideapad 330s ( 8gb RAM, 128GB SSD )',
            'Samsung 22" S22D360 Monitor',
            'Cougar PURI Mechanical keyboard (Cherry MX Red)',
            'Razer Basilisk X Hyperspeed Mouse',
            'Orico USB Hub',
        ],
    },
    {
        title: 'Other Devices',
        items: [
            'Oneplus 7',
            'Tribit xFree Tune bluetooth headset',
            'Oneplus Bullets Wireless Z',
            'Boya M1 lavalier mic',
            'TRN MT1 Pro (In ear monitors)',
        ],
    },
]


export const projects = [
    {
        title: 'E-bank',
        live: 'https://codecanyon.net/item/ebank-complete-online-banking-system-with-dps-loan/30597974?s_rank=6',
        github: '',
        thumbnail: 'https://i.imgur.com/brmQcqRh.jpg',
        description: 'E-bank is a banking application including DPS and Loan',
        tech: ['php','laravel 8','javascript']
    },
    {
        title: 'Lenden',
        live: 'https://codecanyon.net/item/lenden-multipurpose-payment-gateway-system-saas/32131005?s_rank=3',
        github: '',
        thumbnail: 'https://i.imgur.com/h0bOk79h.png',
        description: 'Lenden is Multipurpose Payment Gateway System ( SAAS )',
        tech: ['php','laravel 8','javascript']
    },
    {
        title: 'Timelock',
        live: 'https://codecanyon.net/item/timelock-project-management-system-with-screenshot-capture/32354442?s_rank=2',
        github: '',
        thumbnail: 'https://i.imgur.com/ApqRQNwh.png',
        description: 'Timelock is SAAS based project management system which includes a kanban layout & Screenshot capture',
        tech: ['php','laravel 8','javascript']
    },
    {
        title: 'Routine Management System',
        live: '',
        github: 'https://github.com/fazleyrabby/routine-lte',
        thumbnail: 'https://i.imgur.com/VzSgWo2h.png',
        description: 'This project was created using Laravel and mysql on my last semester as my final year project',
        tech: ['php','laravel 8','jquery']
    }
]

export const about =  {
    title: 'About Me',
    description: 'A tech enthusiast and an introvert. With more than one year of professional web developement experience, I worked on several client projects as well as projects for codecanyon. Currently working as a fulltime Laravel Developer at Electronic First FZ LLE. Learning about new technology is one of my passion. Learning React , Inertia JS. In my free time I like to do nature photography. Click here! to check some of the cool moments that I tried to capture.'
}