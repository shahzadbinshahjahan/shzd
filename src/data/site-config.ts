import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://shahzadbinshahjahan.github.io',
    avatar: {
        src: '',
        alt: 'Shahzad bin Shahjahan'
    },
    title: 'Shahzad bin Shahjahan',
    subtitle: 'Tea fueled Engineer',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/shzd.jpg',
        alt: 'Shahzad bin Shahjahan'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        // {
        //     text: 'Projects',
        //     href: '/projects'
        // },
        // {
        //     text: 'Blog',
        //     href: '/blog'
        // },
        {
            text: 'Contact',
            href: '/contact'
        }
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    footerNavLinks: [
        // {
        //     text: 'About',
        //     href: '/about'
        // },
        // {
        //     text: 'Contact',
        //     href: '/contact'
        // }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/shahzadbinshahjahan'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/shzd'
        }
    ],
    hero: {
        title: 'Hi There!',
        text: "I'm **Shahzad Bin Shahjahan**, a Software Engineer who loves building things, regardless of the platform. Currently building Web and Mobile applications (React, React Native), though my curiosity rarely stays in one place. I have been working on building ERP Systems with Frappe, solving real business problems, identifying business bottlenecks and finding solutions which genuninely helps the business and gives me the dopamine rush I need. Otherwise, I'm just reading a book or out on one of my motorcycles or enjoying a cup of **Tea**.",
        image: {
            src: "/shzd.jpg",
            alt: 'Shahzad Posing xD'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            },
            {
                text: 'View Resume',
                href: '/shahzad_resume.pdf',
                target: '_blank'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
