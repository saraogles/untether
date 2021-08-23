import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Fragment } from 'react';
import { useState } from 'react';

import { Popover, Transition } from '@headlessui/react'
import {
BookmarkAltIcon,
ClipboardListIcon,
CursorClickIcon,
TerminalIcon,
OfficeBuildingIcon,
 BriefcaseIcon,
 GlobeAltIcon,
 InformationCircleIcon,
 NewspaperIcon,
 UserGroupIcon,
 CodeIcon,
 CameraIcon,
 AcademicCapIcon,
 CashIcon,
 ScaleIcon,
 LightningBoltIcon,
 AnnotationIcon,
 TrendingUpIcon,
 EmojiHappyIcon,
 LightBulbIcon,
 LibraryIcon,
 DatabaseIcon,
 ShareIcon,
 CalendarIcon,
 RefreshIcon,
 StatusOnlineIcon,
} from '@heroicons/react/outline'
import {
  ChevronDownIcon,
  MailIcon,
  CheckIcon,
} from '@heroicons/react/solid'

//homepage
const features = [
{
name: 'Our greatest strength lies in the ability to make your business run more smoothly.',
href: '/services',
button: 'Services We Offer',
description: 'We believe in Product Minded Development, which means your needs come first. We thrive on building services that connect disparate systems and automating tedious manual tasks, making your worklife better.',
icon: ClipboardListIcon,
},
{
name: "We solve real problems for real businesses, just like yours.",
href: '/ourwork',
button: 'See Our Work',
description: "With 50 years of collective experience, we are committed to designing a solution to fit your specific business model. We have worked in both commercial and government spaces, manufacturing plants to showroom floors, landing page websites and online storefronts.",
icon: OfficeBuildingIcon,
},
{
name: "If a solution exists, we'll find it, and if it doesn't, we'll build it.",
href: '/technologies',
button: 'The Technologies We Use',
description: "We handle everything from backend database development to the frontend UI layer, committing to a solid user experience for everyone involved. We are proficient in C#, Javascript and Ruby and have a special love for web and mobile applications.",
icon: TerminalIcon },
]

const passionate = [
{
name: '". . . about your growing business"',
href: '/ourwork',
button: "Clients We've Helped",
description: "We are as dedicated to your dreams as we are our own. We get excited about entrepreneurship and watching small businesses grow. We would love to be part of your story. We're here to help you find, develop and integrate technical efficiencies and automations so you can keep your dreams big.",
icon: CursorClickIcon,
imageUrl: 'team/jonathan.jpg',
},
{
name: '". . . about training educators in techology"',
href: '/education',
button: 'More About Education',
description: "Integrating technology in the classroom doesn't have to be daunting. We're here to help you take these new tools and add efficiency and easier access to knowledge in your classrooms everyday. Whether you're intimidated by the techology itself or the endless list of options, we are with you until technology makes your day better, not worse.",
imageUrl: 'team/casie.jpg',
},

]

const enterprise = [
  { name: 'Services', href: '/services', icon: NewspaperIcon },
  { name: 'See Our Work', href: '/ourwork', icon: InformationCircleIcon },
  { name: 'Technologies We Use', href: '/technologies', icon: OfficeBuildingIcon },
  { name: 'Meet Our Team', href: '/ourteam', icon: BriefcaseIcon },
  { name: 'Contact Us', href: '/contact', icon: BriefcaseIcon },
  //{ name: 'Business Portal', href: '#', icon: ShieldCheckIcon },
]
const education = [
  { name: 'Educator Services', href: '/education', icon: UserGroupIcon },
  // { name: 'Untethered Blog', href: '/blog', icon: GlobeAltIcon },
  { name: 'In the Media', href: '/inthemedia', icon: BookmarkAltIcon },
  //{ name: 'Educator Portal', href: '#', icon: DesktopComputerIcon },
]

const navigation = {

  enterprise: [
    { name: 'Services', href: '/services' },
    { name: 'See Our Work', href: '/ourwork' },
    { name: 'Technologies We Use', href: '/technologies' },
    { name: 'Meet Our Team', href: '/ourteam' },
    { name: 'Contact Us', href: '/contact' },
  //  { name: 'Business Portal', href: '#' },

  ],
  education: [
    { name: 'Educator Services', href: '/education' },
  //  { name: 'Untethered Blog', href: '/blog' },
    { name: 'In The Media', href: '/inthemedia' },
  //  { name: 'Educator Portal', href: '#' },
  ],

  social: [
    {
      name: 'Facebook',
      href: 'https://facebook.com/untetherllc',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/untetherllc',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/casiebarksdale',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },

    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/untether-llc',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}
//homepage

//team


const stats = [
  { id: 1, name: 'Cups of Coffee', stat: '17,520', icon: LightBulbIcon },
  { id: 2, name: 'Happy Clients', stat: '40+', icon: EmojiHappyIcon},
  { id: 3, name: 'Years in Business', stat: '8', icon: TrendingUpIcon },
  { id: 4, name: 'Lines of Code', stat: '300,000+', icon: CodeIcon},
  { id: 5, name: 'Automations', stat: '782', icon: TerminalIcon},
  { id: 6, name: 'Teachers Trained', stat: '500+', icon: LibraryIcon},
]


const peoples = [
  {
    name: 'Jonathan Barksdale',
    blurb: 'Hooked on 4:30AM workouts.',
    bio: "Untether's Founder & CEO, Jonathan, embodies persistence and discipline in everything he does. As much time as he spends serving Untether's clients, he spends an equal amount laying the foundation for growth of the company. His passion for engineering goes back to graduating Summa Cum Laude in Electrical Engineering from the University of Alabama in Huntsville. He then ventured into radar countermeasure data analysis and eventually commercial software development, where he's happily been ever since. His favorite part about entrepreneurship is the challenge. He loves working everyday to build something sustainable, while solving very tangible problems for Untether's clients.",
    role: 'Founder & CEO',
    email: 'jonathan@untetherllc.com',
    imageUrl:
      '/team/jonathan.jpg',
    imageUrlpersonality:
      '/team/jonathan_personality.jpg',
  },
  {
    name: 'Casie Barksdale',
    blurb: "Basically superwoman, but she'd never admit it.",
    bio: "",
    role: 'Director of Education Technology Services',
    email: 'casie@untetherllc.com',
    imageUrl:
      '/team/casie.jpg',
    imageUrlpersonality:
    '/team/casie_personality.jpg',

  },
  {
    name: 'Kyndal Barksdale',
    blurb: 'Currently living life in orange and blue. War Eagle!',
    bio: "",
    role: 'Data & Systems Configuration',
    email: 'jonathan@untetherllc.com',
    imageUrl:
    'untetherballoonsmall.png',
  imageUrlpersonality:
  '/untetherballoonsmall.png',
  },
  {
    name: 'Jason Davis',
    blurb: "Absolved from the antics of the Athens office.",
    bio: "Jason serves Untether as a technical consultant and advisor. Early in his career he fell in love with the idea of procedural thinking and was able to apply those skills in both military contracting and ecommerce instances. He prioritizes building a relationship with each and every client and is able to translate their concerns into technical solutions and efficiencies. He embraces change and is always excited to learn something new, which makes him an asset to everything Untether does. He graduated with an MBA with an emphasis on Information Systems. When he's not working, he's either watching his son play collegiate baseball or cheering on the Kentucky Wildcats.",
    role: 'Senior Consultant',
    email: 'jasondavis@untetherllc.com',
    imageUrl: '/team/jason.jpg',
    imageUrlpersonality:
    '/team/jason.jpg',
  },
  {
    name: 'Kinjal Gandhi',
    blurb: "When she's not coding, she's living the preschool mom life.",
    bio: "Kinjal has an aura around her that encourages advancement in every interaction. She considers herself an eternal student, despite having a Master's Degree in Computer Science. Throughout her career, Kinjal has had to efficiently familiarize herself with various systems and infrastructures, which proves to be a valuable asset in working with Untether’s variety of clients. Her energetic attitude of growth, diversity and communication are always a welcome addition to any project. She is always looking to acquire new skills and try new things and is excited to instill that same passion into her daughter. When she's not working, you will probably find her at Yoga, Zumba, or exploring new places with her family.",
    role: 'Senior Software Engineer',
    email: 'kinjal@untetherllc.com',
    imageUrl: '/team/kinjal.jpg',
    imageUrlpersonality:
    '/team/kinjal_personality.jpg',
  },
  {
    name: 'Ty Heery',
    blurb: "If the Braves are playing, you know where to find him.",
    bio: "Ty grew up around computers so it only made sense when Computer Science started calling his name. He is currently studying at Auburn University and serves Untether in research and development when he's not in school. He thrives on analytical thinking and making data-driven decisions. Never knowing anything other than the age of technology, Ty brings fearless familiarity to the table, always ready and willing to investigate the newest technologies.",
    role: 'Junior Programmer',
    email: 'jonathan@untetherllc.com',
    imageUrl: '/team/ty.jpg',
    imageUrlpersonality:
    '/team/ty_personality.jpg',
  },

  {
    name: 'Sara Ogles',
    blurb: 'Probably covered in paint.',
    bio: "Sara has a blended background, which spans across both the design and tech spaces and has transformed into a passion for product development. She is currently serving as the swiss army knife of product, able to be both a direct contributor and still have her product-minded head in the clouds. Her favorite projects are those that require her to learn something new. Complacent is not in her vocabulary; she is always striving to be better and to actively make things better for those around her. She began her career as a one-stop-shop for small business branding and website development and then moved on to work with agile teams. When she's not working for Untether, you can find her painting in her studio or doing the after school sports shuffle with her two kids.",
    role: 'UX Designer & Product Manager',
    email: 'sara@untetherllc.com',
    imageUrl:
    '/team/sara.jpg',
  imageUrlpersonality:
  '/team/sara_personality.jpg',
  },

  {
    name: 'J. Greg Willis',
    blurb: 'Just an Alabama fan living in an Auburn world.',
    bio: "Greg is uniquely equipped with the skill to approach problems holistically, with sustainability in mind, which he uses to serve Untether in his role of Senior Software Engineer. Not only does he bring critical thinking and problem solving to the table, he can also architect that solution to life. His interest in computer science first piqued with video games and before joining Untether, he managed a team of software engineers. His blend of technology and team leadership are an invaluable asset to our growing team. Greg has a BS in Computer Science and a MBA, both from the University of Alabama. Roll Tide! When not working, he enjoys working out, mountain biking, hiking, snow skiing, and spending time with his wife and family.",
    role: 'Senior Software Engineer',
    email: 'jonathan@untetherllc.com',
    imageUrl: '/team/greg.jpg',
    imageUrlpersonality:
    '/team/greg_personality.jpg',
  },





  // More people... (Images Cropped to square at least 1000x1000px)
]

const culture = [
  {
    name: "Balance is important to us",
    description: "Don't cringe when you hear worklife balance at Untether, because we mean it. We balance our work by putting life first.",
  },
  { name: "We're always craving more", description: "Just because we work around life doesn't mean we are indifferent when we work. We are never complacent, always craving to be better, to do better in all aspects of life." },
  {
    name: "We never stop learning",
    description: "We don't know it all and won't pretend to. We are always learning, researching and reading to make ourselves better.",
  },
  { name: 'Integrity is imperative', description: "We actively commit to operating with integrity, in every interaction, in every project, inside and outside of the office." },
  { name: "Aeronauts in practice but not reality", description: "We don't actually fly hot air balloons, but we do strive to elevate and uplift everyone around us, in every interaction. If we ask about your family, it's because we mean it." },
  { name: 'Sometimes we work different hours', description: "We don't hold office hours from 9-5 everyday, because life doesn't always work around work." },
]
//team

//technologies

const techstack = [
  {
    title: 'C#',
    size: '3.9 MB',
    source: 'techlogos/csharp.png',

  },
  {
    title: '.NET',
    size: '3.9 MB',
    source: 'techlogos/dotnet.png',

  },
  {
    title: 'Ruby on Rails',
    size: '3.9 MB',
    source: 'techlogos/rails.svg',

  },
  {
    title: 'JavaScript',
    size: '3.9 MB',
    source: 'techlogos/javascript.png',

  },
  {
    title: 'ASP.NET',
    size: '3.9 MB',
    source: 'techlogos/aspnet.png',

  },
  {
    title: 'jQuery',
    size: '3.9 MB',
    source: 'techlogos/jquery.png',

  },
  {
    title: 'SQL Server',
    size: '3.9 MB',
    source: 'techlogos/sqlserver.png',

  },
  {
    title: 'DevExpress',
    size: '3.9 MB',
    source: 'techlogos/devexpress.png',

  },

  {
    title: 'REST',
    size: '3.9 MB',
    source: 'techlogos/rest.png',

  },
  {
    title: 'React',
    size: '3.9 MB',
    source: 'techlogos/react.png',

  },

]

const servicestack = [


  {
    title: 'Lightspeed',
    size: '3.9 MB',
    source: 'techlogos/lightspeed.png',

  },
  {
    title: 'MailChimp',
    size: '3.9 MB',
    source: 'techlogos/mailchimp.png',

  },

  {
    title: 'Quickbooks',
    size: '3.9 MB',
    source: 'techlogos/qb-logo.svg',

  },

]

//technologies

//services

const serviceslist = [
  {
  title: 'Third-Party Setup & Integrations',
  icon: CashIcon,
  iconForeground: 'text-emerald-100',
  iconBackground: 'bg-emerald-500',
  description: "Does your business need to use Salesforce, Shopify, Smartsheet or another third-party application? No problem! We can explore the best combination of services to get you started or we can integrate the solutions you're already using.",
  },
  {
    title: 'Custom Automations',
    icon: TerminalIcon,
    iconForeground: 'text-indigo-100',
    iconBackground: 'bg-indigo-500',
    description: "If you find yourself performing the same repetitive, monotonous task day in and day out, let's see if we can't automate that for you and give you a little time back in your day. We can help keep your data accurate and up to date without added manual processes.",

  },
  {
    title: 'Webmaster Services',
    icon: GlobeAltIcon,
    iconForeground: 'text-blue-100',
    iconBackground: 'bg-blue-500',
    description: "It's past time to have a web presence but if that's the last thing you want to think about, much less maintain, let us take that on for you. We can get one up and running and keep it up and running without you ever having to think about a website again.",

  },
  {
    title: 'Custom Software & Analytics',
    icon: ShareIcon,
    iconForeground: 'text-lime-100',
    iconBackground: 'bg-lime-500',
    description: "B2B is our specialty. We've created ways to keep warehouses and inventory synchronized, employees up to date and even dashboards for management to be informed. Whatever your company's needs may be, we start there.",

  },
  {
    title: 'Database & API Development',
    icon: DatabaseIcon,
    iconForeground: 'text-rose-100',
    iconBackground: 'bg-rose-500',
    description: "If a third-party solution isn't for you, let's build something custom for your data. Whether you have a unique business model or so much data you don't know where to start, we can create something that keeps your information secure for the long haul.",

  },
  {
    title: 'Technology Training',
    icon: AcademicCapIcon,
    iconForeground: 'text-cyan-100',
    iconBackground: 'bg-cyan-500',
    description: "If just reading about technology makes you break out into a cold sweat, let's talk about technology training. We'd love to get you comfortable with the tools you're using and help you find ways for those tools to add efficiency to your day.",

  },
]

const metrics = [
  { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
  { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
  { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
  { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]

//services

//Ourwork

const work = [
  {
    client: 'Bella Vita',
    caption: 'A leads management application allows Bella Vita to track in store prospects. Used daily, it organizes and manages special orders and even notifies customers when a saved item is restocked.',
    project: 'bella vita',
    source:
    'clientpage/bellavita.jpg',
    href: 'https://shopbellavita.com/',
    },
  {
    client: 'Line-X',
    caption: "Unifying data is a common business challenge, and a difficult one when using disparate systems. Integrating data into a single database and modeling it in Cognos allows for seamless reporting.",
    project: 'line-x',
    source:
    'clientpage/linex.jpg',
    href: 'https://linex.com/',
  },
  {
    client: 'Logo Brands',
    caption: "Complex business rules are common with Logo Brands. Combining warehousing, manufacturing and distribution for various agreement types, automation processes are essential to managing fulfillment across multiple warehouses.",
    project: 'logo brands',
    source:
    'clientpage/logobrands.jpg',
    href: 'https://logobrands.com/',
  },

  {
    client: 'Blount County Schools',
    caption: "Shifting to a culture of embracing technology is important when considering remote learning. Teachers now use technology in a purposeful way on a daily basis and students are actively embracing it.",
    project: 'Blount county schools',
    source:
    'clientpage/blountcounty.jpg',
    href: 'http://www.blountboe.net/',
  },
  {
    client: 'Oneonta City Schools',
    caption: "Training on specific programs and services is important to make sure every penny spent within the school system is maximized. Some specific programs included in Oneonta's plan are Google for Education, Smore, Schoology, Screencastify, and Edpuzzle.",
    project: 'oneonta city schools',
    source:
    'clientpage/ohs.jpg',
    href: 'https://www.oneontacityschools.com/',
  },
  {
    client: 'Caspari',
    caption: "When a product lifecycle involves an intricate and inderdepartmental hand-off process, a combination of Smartsheets for data entry and API calls for data synchronization keeps everyone informed at every stage of the process.",
    project: 'Caspari',
    source:
    'clientpage/caspari.jpg',
    href: 'https://www.casparionline.com/',
  },
  {
    client: 'South Western Communications',
    caption: "Timely estimations are essential when dealing with various industries like Healthcare, Education and Detention. A custom web application was developed to quickly estimate and engineer project costs across every branch of service.",
    project: 'SWC',
    source:
    'clientpage/swc.jpg',
    href: 'https://www.swc.net/general',
  },
  {
    client: 'Driven Locks',
    caption: 'Untether is a development and integration partner to Driven, to facilitate video camera integration and other application development initiatives.',
    project: 'Driven',
    source:
    'clientpage/driven.jpg',
    href: 'https://www.drivenlocks.com/',
  },
]

//ourwork

//Education

const planningFeatures = [
  'Full day of customized training',
  'Teachers receive training during planning periods',]
const halfhalfFeatures = [
  'Full day of customized training',
  'Teachers grouped by grade or technology level',
  'Each group receives an identical half-day of training']
const fulldayFeatures = [
  'Full day of customized training',
  'Full-group, full-day instruction at the school',
  'All teachers attend training together',
  'Delivers as much customized instructional material as possible in one day',
]

const edservices = [
  {
    name: 'School-Specific Services',
    description:
      "One size fits all doesn't exist in education. After meeting with your school's leadership team, I'll be able to better able to identify specific strengths and weaknesses and apply that to your training schedule.",
    icon: LibraryIcon,
  },
  {
    name: 'Professional Development',
    description:
      "During your district's scheduled professional development days, your school will receive priority scheduling for training and development of either small groups or full staff.",
    icon: CalendarIcon,
  },
  {
    name: 'Consistent Training',
    description:
    "In my 15 years of experience, it's shown that a cyclic training schedule is the most effective way to implement a new initiative. This approach also allows teachers time and space to prepare for their sessions.",
    icon: RefreshIcon,
  },
  {
    name: 'Wireless Wednesday',
    description:
    "Each month an email newsletter is sent out, which includes teaching strategies, technology tools and classroom management tips for using technology and enhanced Google information.",
    icon: StatusOnlineIcon,
  },
  {
    name: 'Teacher Leaders',
    description:
    "Developing teacher leaders provides an opportunity for teachers to take ownership of their own learning. This is an imperative part of the continued success of the digital program after our initial training ends.",
    icon: AcademicCapIcon,
  },
  {
    name: 'Google Certification',
    description:
    "At the end of the year, teachers will have the option, as well as the knowledge they need, to be able to take the Google Certified test.",
    icon: AnnotationIcon,
  },
]

//education



function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}


export default function BasicExample() {
  return (
    <Router>
      <div className="relative bg-gradient-to-tr from-bluegray-900 via-bluegray-800 to-lightblue-900 overflow-hidden">
      <Popover className="z-50 relative">
          {({ open }) => (
            <>

              <div className="relative z-10 shadow-md">

                <div className="px-4 py-6 sm:px-6 lg:px-24 flex justify-between">
                  <div>
                    <a href="/" className="flex">
                      <span className="uppercase font-sans text-lg tracking-widest text-bluegray-200 ">Untether</span>

                    </a>
                  </div>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-yellow-400' : 'text-bluegray-200',
                      'uppercase group inline-flex items-center text-sm font-medium hover:text-yellow-400 focus:outline-none focus:ring-none'
                    )}
                  >
                    <span>Explore Our Solutions</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-yellow-400' : 'text-lightblue-200',
                        'ml-2 h-5 w-5 group-hover:text-yellow-400'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <Popover.Panel static className="absolute z-10 inset-x-0 transform shadow-lg">
                  <div className="absolute inset-0 flex" aria-hidden="true">
                    <div className="bg-bluegray-100 w-1/2" />
                    <div className="bg-bluegray-100 w-1/2" />
                  </div>
                  <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                    <nav
                      className="grid gap-y-10 px-4 py-8 bg-bluegray-100 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                      aria-labelledby="solutionsHeading"
                    >
                      <h2 id="solutionsHeading" className="sr-only">
                        Solutions menu
                      </h2>
                      <div>
                        <h3 className="text-sm font-medium tracking-wide text-bluegray-500 uppercase">Enterprise</h3>
                        <ul className="mt-5 space-y-6">
                          {enterprise.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-lightblue-900 hover:bg-bluegray-200 transition ease-in-out duration-150"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-bluegray-600" aria-hidden="true" />
                                <span className="ml-4">{item.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium tracking-wide text-bluegray-500 uppercase">Education & More</h3>
                        <ul className="mt-5 space-y-6">
                          {education.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-lightblue-900 hover:bg-bluegray-200 transition ease-in-out duration-150"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-bluegray-600" aria-hidden="true" />
                                <span className="ml-4">{item.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </nav>
                      <img className="object-cover " src="group/team_brick.jpg" alt="" />
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ourteam">
            <OurTeam />
          </Route>
          <Route path="/ourwork">
            <Ourwork />
          </Route>
          <Route path="/technologies">
            <Technologies />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/inthemedia">
            <Inthemedia />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/404">
            <NotFoundPage />
          </Route>
          <Route path="/success">
            <SuccessPage />
          </Route>
          <Route path="/thanksforsubscribing">
            <ThanksForSubscribing />
          </Route>

        </Switch>
        <footer className="" aria-labelledby="footerHeading">
          <h2 id="footerHeading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="md:grid md:grid-cols-3 md:gap-16 items-center mx-12">


              <div className="space-y-8 xl:col-span-1">
                <img
                  className="h-32"
                  src="untetherballoonsmall.png"
                  alt="Untether"
                />
                <p className="text-bluegray-400 text-base">
                  Creating solutions for your business to run better.
                </p>
                <div className="flex space-x-6">
                  {navigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="text-bluegray-300 hover:text-yellow-400">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 col-span-2">



                <div className="grid grid-cols-2 md:gap-8 items-start gap-4 lg:justify-items-end ">
                  <div>
                    <h3 className="text-sm font-semibold text-yellow-400 tracking-wider uppercase">Enterprise</h3>
                    <ul className="mt-4 space-y-4">
                      {navigation.enterprise.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-base text-bluegray-300 hover:text-yellow-400">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="">
                    <h3 className="text-sm font-semibold text-yellow-400 tracking-wider uppercase">Education & More</h3>
                    <ul className="mt-4 space-y-4">
                      {navigation.education.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-base text-bluegray-300 hover:text-yellow-400">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-yellow-4 00 pt-8">
              <p className="text-sm text-bluegray-400 xl:text-center">&copy; 2021 Untether, LLC. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}



function Home() {
  return (
    <div className="">



      <main className="lg:relative overflow-hidden">

        <div className="invisible sm:visible absolute -right-56 -mt-48">
          <div className="w-160 h-160 lg:w-240 lg:h-240 bg-bluegray-900 rounded-full opacity-50">
          </div>
        </div>

        <div className="invisible sm:visible absolute -left-16 mt-112">
          <div className="w-80 h-80 lg:w-112 lg:h-112 bg-bluegray-900 rounded-full opacity-50">
          </div>
        </div>

        <div className="invisible sm:visible absolute -left-16 mt-80">
          <div className="w-48 h-48 lg:w-60 lg:h-60 bg-bluegray-900 rounded-full opacity-50">
          </div>
        </div>

        <div className="invisible sm:visible absolute -right-32 mt-130">
          <div className="lg:w-96 lg:h-96 bg-bluegray-900 rounded-full opacity-50">
          </div>
        </div>


        <div className="relative sm:pt-24 sm:pb-16 sm:inline-flex 2xl:flex 2xl:m-auto max-w-7xl">

          <div className="sm:hidden">
            <img className="flex justify-items-end max-w-full" src="untetherballoon.png" alt="" />
          </div>

          <div className="z-40 px-4 sm:w-3/4 sm:px-16 max-w-2xl mx-auto">
            <h1 className="font-bold text-5xl sm:text-4xl md:text-5xl lg:text-7xl mb-12 tracking-wide">
              <span className="block text-bluegray-200 leading-tight">Your business</span>{' '}
              <span className="block text-bluegray-200 leading-tight">deserves the</span>{' '}
              <span className="block font-extrabold text-yellow-400 inline py-2 border-yellow-400 leading-tight whitespace-nowrap 2xl:pl-0 2xl:ml-0">right</span>
              <span className="text-bluegray-200 inline whitespace-nowrap"> solution.</span>
            </h1>
            <p className="font-serif mt-16 ml-0 md:ml-8 max-w-md text-xl lg:text-2xl text-bluegray-200 tracking-wide">
              Sometimes you need something that is tailored to your specific business needs.
            </p>
            <p className="font-serif mt-4 ml-0 md:ml-8 max-w-md text-xl lg:text-2xl text-bluegray-200 tracking-wide">
              That's where we come in.
            </p>
            <div className="mt-10 w-64">
              <div className="rounded-full">
                <a href="/contact"
                  className="flex items-center justify-center ml-16 p-4 w-48 border-2 border-yellow-400 text-sm font-normal tracking-wider uppercase rounded-full text-bluegray-800 bg-yellow-400 hover:bg-transparent hover:text-yellow-400 hover:font-bold">
                  Let's Get Started
                </a>
              </div>
            </div>
          </div>
            <div className="z-40 hidden sm:flex sm:-mt-4 md:-mt-16 w-full h-64 sm:h-72 md:h-96 lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
              <img className="flex justify-items-end object-cover" src="untetherballoon.png" alt="" />
            </div>
          </div>
            <div className="absolute -left-32 mt-16 sm:-left-8 sm:mt-24">
              <div className="lg:w-80 lg:h-80 bg-bluegray-900 rounded-full opacity-50 2xl:ml-48">
              </div>
            </div>
            <div className="absolute -left-32 mt-16 sm:-left-8 sm:mt-24">
              <div className="lg:w-56 lg:h-56 bg-bluegray-900 rounded-full opacity-50 -ml-12 2xl:ml-12 mt-48">
              </div>
            </div>



        <div className="py-16 lg:py-24 ">
          <div className="relative lg:max-w-full">

    <div className="flex justify-center">



            <div className="relative mt-12 lg:mt-24 md:flex items-center max-w-7xl ml-16 mr-16 sm:ml-0 sm:mr-0">


              <div className="relative px-4 sm:px-16">
                <h3 className="whitespace-nowrap text-4xl sm:text-6xl font-bold text-bluegray-200 tracking-wide pb-2 border-b-8 border-yellow-400 mb-16 max-w-sm ">
                  Who We Are</h3>
                <p className="font-serif mt-3 text-lg text-bluegray-300 max-w-xl">
                  Untether is a small, boutique firm located in beautiful, historic Athens, Alabama. Founded in 2013 and built on southern charm, we strive to build relationships before roadmaps.
                </p>
                <p className="mt-3 text-lg text-bluegray-300 font-serif mb-8 max-w-xl">
                  We are passionate about understanding your business needs and helping you solve them, just like we would our own.
                </p>
                <div className="mt-10 w-64">
                  <div className="">
                    <a href="ourteam" className="flex items-center justify-center ml-16 p-4 w-48 border-2 border-yellow-400 text-sm font-normal tracking-wider uppercase rounded-full text-bluegray-800 bg-yellow-400 hover:bg-transparent hover:text-yellow-400 hover:font-bold">
                      More About Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-20 mx-auto md:mr-16 relative lg:mt-0" aria-hidden="true">

                <div className="absolute -right-24 mt-48">
                  <div className="lg:w-44 lg:h-44 bg-bluegray-900 rounded-full opacity-50">
                  </div>
                </div>

                <div className="absolute -right-32 mt-80">
                  <div className="lg:w-72 lg:h-72 bg-bluegray-900 rounded-full opacity-50">
                  </div>
                </div>

                <div className="absolute right-10 mt-120">
                  <div className="lg:w-44 lg:h-44 bg-bluegray-900 rounded-full opacity-50">
                  </div>
                </div>

                <img className="m-auto relative rounded-full max-h-5/6 max-w-5/6" width={490} src="/courthouse.jpg" alt="" />

              </div>


            </div>

    </div>



            <div className="absolute -left-16">
              <div className="lg:w-130 lg:h-130 mt-8 bg-bluegray-900 rounded-full opacity-50">
              </div>
            </div>
            <div className="absolute left-16">
              <div className="lg:w-72 lg:h-72 bg-bluegray-900 rounded-full opacity-50 mt-112">
              </div>
            </div>
          </div>
          <div className="absolute right-8">
            <div className="lg:w-72 lg:h-72 bg-bluegray-900 rounded-full opacity-50 mt-96">
            </div>
          </div>
          <div className="absolute right-32">
            <div className="lg:w-48 lg:h-48 bg-bluegray-900 rounded-full opacity-50 mt-160">
            </div>
          </div>
        </div>

        <div className="relative py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="text-xl font-semibold tracking-wider text-yellow-400 uppercase py-4">we're here for you</h2>
            <p className="mt-2 text-3xl font-bold text-bluegray-50 tracking-tight sm:text-5xl">
              What can we do to make your day better?
            </p>
            <p className="mt-5 max-w-prose mx-auto text-lg text-bluegray-400 font-serif py-4">
              Whether you already know exactly what you need or you need us to pull up a whiteboard and brainstorm solutions with you, we're here for it.
            </p>
            <div className="">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {features.map((feature) => (
                <div key={feature.name} className="pt-6 mt-12">
                  <div className="shadow-md flow-root bg-bluegray-200 rounded-sm px-6 pb-8">
                    <div className="-mt-6 h-80">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 text-yellow-50 bg-yellow-500 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-bluegray-100" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="flex flex-wrap justify-center place-content-evenly h-96">
                        <h3 className="italic text-xl font-serif text-bluegray-800 tracking-tight">{feature.name}</h3>
                        <p className="text-sm text-bluegray-700 font-serif">
                          {feature.description}
                        </p>
                      <a href={feature.href}>
                        <button className="shadow p-4 mb-4 sm:-mt-2 text-xs tracking-wider uppercase text-bluegray-800 bg-yellow-400 border-2 border-yellow-400 rounded-full hover:border-yellow-500 hover:bg-bluegray-200 hover:text-bluegray-900">{feature.button}</button>
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>


          </div>
        </div>

        <div className="bg-bluegray-900 w-full">
              <div className="max-w-7xl py-16 px-8 sm:px-24 m-auto">
                <h2 className="sm:-ml-16 text-3xl font-extrabold text-bluegray-50">We've worked with companies from all over the country</h2>
                <div className="flow-root mt-8 lg:mt-10 ">
                  <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 justify-center sm:justify-start">
                      <img className="h-36" src="logos/bellavita.png" alt="Bella Vita" />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 justify-center sm:justify-start">
                      <img className="h-36" src="logos/linex.png" alt="Line-X" />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 justify-center sm:justify-start">
                      <img
                        className="h-36"
                        src="logos/logobrands.png"
                        alt="Logo Brands"
                      />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 justify-center sm:justify-start">
                      <img
                        className="h-36"
                        src="logos/OHS.png"
                        alt="OHS"
                      />

                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 justify-center sm:justify-start">
                      <img
                        className="h-36"
                        src="logos/blount.png"
                        alt="Blount County Schools"
                      />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 justify-center sm:justify-start">
                      <img
                        className="h-36"
                        src="logos/caspari.png"
                        alt="Caspari"
                      />
                    </div>
              { /*      <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 justify-center sm:justify-start">
                      <img
                        className="h-40"
                        src="logos/swc.png"
                        alt="Southwest Indiana Chamber"
                      />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 justify-center sm:justify-start">
                      <img
                        className="h-40"
                        src="logos/driven.png"
                        alt="Driven Locks"
                      />
                    </div>
                   */ }
                  </div>
                </div>
              </div>
            </div>


            <div className="absolute -left-16">
              <div className="lg:w-56 lg:h-56 bg-bluegray-900 rounded-full opacity-60 mt-36">
              </div>
            </div>

            <div className="absolute left-16">
              <div className="lg:w-112 lg:h-112 bg-bluegray-900 rounded-full opacity-60 mt-52">
              </div>
            </div>

            <div className="absolute left-4">
              <div className="lg:w-72 lg:h-72 bg-bluegray-900 rounded-full opacity-60 mt-130">
              </div>
            </div>

            <div className="absolute left-36">
              <div className="lg:w-56 lg:h-56 bg-bluegray-900 rounded-full opacity-60 mt-192">
              </div>
            </div>



            <div className="absolute -right-16">
              <div className="lg:w-72 lg:h-72 bg-bluegray-900 rounded-full opacity-50 mt-20">
              </div>
            </div>

            <div className="absolute right-32">
              <div className="lg:w-72 lg:h-72 bg-bluegray-900 rounded-full opacity-50 mt-56">
              </div>
            </div>

            <div className="absolute -right-4">
              <div className="lg:w-56 lg:h-56 bg-bluegray-900 rounded-full opacity-50 mt-96">
              </div>
            </div>

            <div className="absolute -right-48">
              <div className="lg:w-112 lg:h-112 bg-bluegray-900 rounded-full opacity-50 mt-192">
              </div>
            </div>

            <div className="absolute right-36">
              <div className="lg:w-96 lg:h-96 bg-bluegray-900 rounded-full opacity-50 mt-240">
              </div>
            </div>

            <div className="relative py-16 sm:py-24 lg:py-32 max-w-7xl m-auto">



              <div className="grid justify-items-center">
                <h3 className=" max-w-xl whitespace-nowrap text-4xl sm:text-6xl font-bold text-bluegray-200 tracking-wide pb-2 border-b-8 border-yellow-400 ">
                  We Are Passionate</h3>

                <div className="grid justify-items-center mt-32 mx-16">


                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl text-center">
                    {passionate.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="shadow-md flow-root bg-bluegray-100 rounded-sm px-8 sm:px-6">
                        <div className="mt-16 sm:mt-6 h-auto">
                          <div>
                            <span className="inline-flex items-center justify-center p-8 -mt-32">
                              <img className=" flex-shrink-0 rounded-full shadow" src={feature.imageUrl} alt=""/>
                            </span>
                          </div>
                          <div className="flex flex-wrap justify-center place-content-evenly h-auto my-8">
                            <h3 className="italic text-xl font-sans text-bluegray-900 tracking-tight my-8">{feature.name}</h3>
                            <p className="text-md text-bluegray-600 font-serif">
                              {feature.description}
                            </p>
                          <a href={feature.href}>
                            <button className="shadow p-4 my-8  text-xs tracking-wider uppercase text-bluegray-900 bg-yellow-400 border-2 border-yellow-400 rounded-full hover:bg-transparent hover:text-bluegray-800">{feature.button}</button>
                          </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>


            <div className="relative py-16">
                 <div className="hidden absolute top-0 inset-x-0 h-1/2 bg-bluegray-300 lg:block" aria-hidden="true" />
                 <div className="max-w-7xl mx-auto bg-bluegray-900 lg:bg-transparent lg:px-8">
                   <div className="lg:grid lg:grid-cols-12">
                     <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                       <div className="absolute inset-x-0 h-1/2 bg-bluegray-300 lg:hidden" aria-hidden="true" />
                       <div className="max-w-md mx-auto px-8 sm:max-w-3xl sm:px-8 lg:max-w-none lg:p-0 pt-16 lg:pt-0">
                         <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                           <img
                             className="object-cover object-center rounded-3xl shadow-2xl"
                             src="group/working_ty.jpg"
                             alt=""
                           />
                         </div>
                       </div>
                     </div>

                     <div className="relative bg-bluegray-900 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">

                       <div className="relative max-w-md mx-auto py-12 px-8 space-y-6 sm:max-w-3xl sm:py-16 sm:px-8 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                         <h2 className="text-3xl font-bold text-bluegray-200" id="join-heading">
                           Ready to get started?
                         </h2>
                         <p className="text-lg text-bluegray-200">
                           Nothing would make us happier to brainstorm with you and see what Untether can offer your business or school.
                         </p>
                         <a
                           className="block w-full py-3 px-5 text-center bg-yellow-400 rounded-full shadow-md text-xs font-medium text-bluegray-900 hover:bg-bluegray-900 hover:text-yellow-400 border-2 uppercase border-yellow-400 sm:inline-block sm:w-auto"
                           href="/contact"
                         >
                           Get In Touch
                         </a>
                       </div>
                     </div>

                   </div>
                 </div>
               </div>

      </main>


    </div>
  );
}

function OurTeam() {
  return (

    <div className="">
      <div className="bg-bluegray-900">
          <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-yellow-400 tracking-wide uppercase p-4">Meet Our Team</h2>
              <p className="mt-1 text-4xl font-extrabold text-bluegray-50 sm:text-5xl sm:tracking-tight lg:text-6xl mb-8">
                If you need us, we'll be in the Cloud.
              </p>

              <p className="max-w-xl mt-8 mx-auto text-xl text-bluegray-300 font-serif">
              "There's nothing better than sharing in success. The individual, the singular - not fun. The team - awesome."        </p>
              <p className="italic text-bluegray-500 font-serif mt-2">- Dan Patrick, Sportscaster</p>

            </div>
          </div>
          </div>



      <div className=" bg-bluegray-100 relative shadow max-w-screen mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-16">

      <h2 className=" text-3xl font-normal uppercase text-lightblue-900 sm:tracking-wide  -mt-16 sm:-mt-20 lg:-mt-24 bg-bluegray-50 shadow rounded-full p-4 max-w-md m-auto">
      Our Aeronauts
      </h2>
      <p className="text-bluegray-500 text-2xl font-serif mt-12">aer•o•naut (noun)</p>
      <p className="max-w-xl mt-2 mx-auto text-xl text-bluegray-400 font-serif italic">
        a traveler in a hot-air balloon, airship, or other flying craft
      </p>
        <div className="space-y-20 my-16">




          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3  xl:mx-16">
               {peoples.map((person) => (
                 <li
                   key={person.email}
                   className="col-span-1 flex flex-col text-center bg-bluegray-50 rounded-lg shadow divide-y divide-bluegray-200"
                 >
                   <div className="flex-1 flex flex-col p-8 sm:p-4">
                     <img className="w-56  h-56 md:w-72 md:h-72 flex-shrink-0 mx-auto rounded-full my-8 shadow" src={person.imageUrlpersonality} alt="" />
                     <img className="z-0 mx-auto w-56 h-56 md:w-72 md:h-72 flex-shrink-0 rounded-full -mt-64 md:-mt-80 hover:opacity-0" src={person.imageUrl} alt="" />
                     <h3 className="mt-6 text-lightblue-700 text-lg font-normal ">{person.name}</h3>
                     <dl className="mt-1 flex-grow flex flex-col ">
                       <dt className="sr-only">Title</dt>
                       <dd className="text-bluegray-500 text-sm font-normal tracking-wide italic">{person.blurb}</dd>
                       <dt className="sr-only">Role</dt>
                       <dd className="py-2">
                         <span className="text-yellow-400 text-md font-bold uppercase">
                           {person.role}
                         </span>
                       </dd>
                       <dd className="m-2 text-left text-bluegray-500 text-sm font-normal tracking-wide ">{person.bio}</dd>
                     </dl>
                   </div>
                   <div>

{ /*
                     <div className="-mt-px flex divide-x divide-gray-200">
                       <div className="w-0 flex-1 flex hover:bg-yellow-400 rounded-b-lg">
                         <a
                           href={`mailto:${person.email}`}
                           className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-bg font-medium border border-transparent rounded-bl-lg "
                         >
                           <MailIcon className="w-5 h-5 text-bg " aria-hidden="true" />
                           <span className="ml-3">Email</span>
                         </a>
                       </div>

                     </div>
 */ }

                   </div>
                 </li>
               ))}
             </ul>






        </div>

      </div>




      <div className="">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-bluegray-300 uppercase tracking-wide">We Work better</h2>
            <p className="mt-2 text-4xl font-extrabold tracking-wide text-yellow-400">Because work doesn't come first</p>
            <p className="mt-4 text-lg text-bluegray-400">
              At Untether, we realize we're better employees when life takes the lead.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              {culture.map((feature) => (
                <div key={culture.name} className="relative">
                  <dt>
                    <CheckIcon className="absolute h-6 w-6 text-yellow-400" aria-hidden="true" />
                    <p className="ml-9 text-lg leading-6 font-medium text-bluegray-100">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-9 text-base text-bluegray-400">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className=" mt-8  p-8 m-auto bg-bluegray-100 w-screen">

        <div className=" grid grid-cols-1  sm:grid-cols-3 xl:grid-cols-6 max-w-7xl justify-items-center mx-auto">
          {stats.map((item)=>(

          <div key={item.id} className="grid my-8">
            <div className="bg-bluegray-50 rounded-full w-48 h-48 text-center grid content-center shadow">
              <div className="-mt-20 bg-yellow-400 h-16 w-16 rounded-xl  m-auto grid content-center justify-center">
                <item.icon className="h-8 w-8 text-bluegray-50" />
              </div>
              <p className="font-medium text-sm uppercase pt-6 text-bluegray-500"> {item.name}</p>
              <p className="font-medium text-4xl text-yellow-400 "> {item.stat}</p>
            </div>
          </div>

          ))}

        </div>


      </div>


      <div className="relative py-16">
           <div className="hidden absolute top-0 inset-x-0 h-1/2 bg-bluegray-300 lg:block" aria-hidden="true" />
           <div className="max-w-7xl mx-auto bg-bluegray-900 lg:bg-transparent lg:px-8">
             <div className="lg:grid lg:grid-cols-12">
               <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                 <div className="absolute inset-x-0 h-1/2 bg-bluegray-300 lg:hidden" aria-hidden="true" />
                 <div className="max-w-md mx-auto px-8 sm:max-w-3xl sm:px-8 lg:max-w-none lg:p-0">
                   <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                     <img
                       className=" object-cover object-center rounded-3xl shadow-2xl "
                       src="office.jpg"
                       alt=""
                     />
                   </div>
                 </div>
               </div>

               <div className="relative bg-bluegray-900 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">

                 <div className="relative max-w-md mx-auto py-12 px-8 space-y-6 sm:max-w-3xl sm:py-16 sm:px-8 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                   <h2 className="text-3xl font-bold text-bluegray-200" id="join-heading">
                     Want to work with us?
                   </h2>
                   <p className="text-lg text-bluegray-200">
                     Nothing would make us happier to brainstorm with you and see what Untether can offer your business or school.
                   </p>
                   <a
                     className="block w-full py-3 px-5 text-center bg-yellow-400 rounded-full shadow-md text-xs font-medium text-bluegray-900 hover:bg-bluegray-900 hover:text-yellow-400 border-2 uppercase border-yellow-400 sm:inline-block sm:w-auto"
                     href="/contact"
                   >
                     Get In Touch
                   </a>
                 </div>
               </div>

             </div>
           </div>
         </div>
    </div>



  );
}

function Ourwork() {
  return (
    <div className="">


    <div className="bg-bluegray-900">
    <div className=" max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base font-semibold text-yellow-400 tracking-wide uppercase p-4">See our work</h2>
        <p className="mt-1 text-4xl font-extrabold text-bluegray-50 sm:text-5xl sm:tracking-tight capitalize lg:text-6xl mb-12">
clients we have helped
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl text-bluegray-300 font-serif">
"Untether is our go-to company for solving any of our integration needs. Their work produces a large ROI by eliminating manual tasks."        </p>
        <p className="italic text-bluegray-500 font-serif">- Brent Singley, Bella Vita, Inc.</p>
      </div>
      </div>
   </div>

   <div className="bg-bluegray-200 ">
     <ul role="list" className=" grid justify-center mx-8 py-4 sm:mx-36 sm:py-16 grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 ">
           {work.map((work) => (
             <li key={work.source} className="relative">
               <div className="group block w-full aspect-w-10 aspect-h-10 rounded-lg bg-gray-100 overflow-hidden">
               <a href={work.href}>
                 <img src={work.source} alt="" className="object-cover pointer-events-none " />
               </a>
                   <span className="sr-only">View details for {work.title}</span>
                   <p className="sr-only">{work.project}</p>
               </div>
               <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{work.client}</p>
               <p className="block text-sm font-medium text-gray-500 pointer-events-none">{work.caption}</p>
             </li>
           ))}
         </ul>
     </div>


     <div className="relative py-16">
          <div className="hidden absolute top-0 inset-x-0 h-1/2 bg-bluegray-300 lg:block" aria-hidden="true" />
          <div className="max-w-7xl mx-auto bg-bluegray-900 lg:bg-transparent lg:px-8">
            <div className="lg:grid lg:grid-cols-12">
              <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                <div className="absolute inset-x-0 h-1/2 bg-bluegray-300 lg:hidden" aria-hidden="true" />
                <div className="max-w-md mx-auto px-8 sm:max-w-3xl sm:px-8 lg:max-w-none lg:p-0 pt-16 lg:pt-0">
                  <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                    <img
                      className="object-cover object-center rounded-3xl shadow-2xl "
                      src="group/working_ty.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="relative bg-bluegray-900 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">

                <div className="relative max-w-md mx-auto py-12 px-8 space-y-6 sm:max-w-3xl sm:py-16 sm:px-8 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                  <h2 className="text-3xl font-bold text-bluegray-200" id="join-heading">
                    Ready to get started?
                  </h2>
                  <p className="text-lg text-bluegray-200">
                    Nothing would make us happier to brainstorm with you and see what Untether can offer your business or school.
                  </p>
                  <a
                    className="block w-full py-3 px-5 text-center bg-yellow-400 rounded-full shadow-md text-xs font-medium text-bluegray-900 hover:bg-bluegray-900 hover:text-yellow-400 border-2 uppercase border-yellow-400 sm:inline-block sm:w-auto"
                    href="/contact"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

    </div>
  );
}

function Technologies() {
  return (
    <div className="">
    <div className="bg-bluegray-900">
      <div className=" max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <h2 className="text-base font-semibold text-yellow-400 tracking-wide uppercase p-4">Technologies We Use</h2>
          <p className="mt-1 text-4xl font-extrabold text-bluegray-50 sm:text-5xl sm:tracking-tight lg:text-6xl mb-8">
            Let's Talk About Tech
          </p>
          <p className="max-w-7xl mx-auto text-xl text-bluegray-300 font-serif">
            More about the tools we use and technical experience we've gained along the way
          </p>
        </div>
      </div>
      </div>

        <div className="bg-bluegray-100 overflow-hidden">
              <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="hidden lg:block bg-bluegray-200 absolute top-0 bottom-0 left-3/4 w-screen" />

                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="relative lg:row-start-1 lg:col-start-2">

                    <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                      <figure>
                        <div className="aspect-w-12 aspect-h-7 lg:aspect-none">

                          <img
                            className="rounded-lg shadow-lg object-cover object-center"
                            src="group/mural_vertical.jpg"
                            alt="Team Photo"

                          />
                        </div>
                      </figure>
                    </div>
                  </div>

                  <div className="mt-8 lg:mt-0">
                    <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                      <div>
                        <h2 className="text-base text-bluegray-500 font-semibold tracking-wide uppercase">Working With Untether</h2>
                        <h3 className="my-4 text-3xl leading-8 font-extrabold tracking-tight text-bluegray-800 sm:text-4xl">
                        Our Approach
                        </h3>
                      </div>
                    </div>
                      <p className="text-lg text-bluegray-500">
                        What sets us apart, both technologically and as a team, is our captivation for the unknown. We view new methods, new ideas and new solutions as a challenge to understand and opportunity to grow.
                      </p>
                    </div>
                    <div className="text-lg mt-5 prose prose-indigo text-bluegray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                      <p>
                        We are not intimidated by insurmountable business problems because we believe in our determination, dedication and willpower to overcome obstacles we encounter.
                      </p>



                      <h3 className="text-bluegray-800">Why work with a full-stack team?</h3>
                      <p className="text-lg">
                        Working alongside a small team with broad skillsets gives you the ability to create a custom project plan for your business. We can add in resources to compliment your existing team or take the entire project off of your hands.
                      </p>

                      <ul>
                        <li>We have architects ready to identify potential solutions for your business.</li>
                        <li>We have engineers ready to bring that vision to life.</li>
                        <li>We have creatives to make sure user experience isn't sacrificed along the way.</li>
                        <li>We have product people to balance our perfectionism with efficiency. </li>

                      </ul>

                    </div>
                  </div>
                </div>
              </div>


      </div>

      <div className="mt-24 flex-col text-center">
            <h2 className="text-bluegray-50 text-2xl font-serif ">Programming, Cloud & Databases</h2>
            <p className="pt-2 pb-8 text-xl text-bluegray-400 font-serif italic">
              Take a closer look at some of our favorite tools to use.
            </p>
      </div>
        <div className="bg-bluegray-50 shadow-lg rounded-lg m-8">
          <ul role="list" className=" grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-5 xl:gap-x-8">
                {techstack.map((tech) => (
                  <div key={tech.source} className="relative flex h-36 p-4 sm:p-8 justify-center">
                      <img src={tech.source} alt="" className="object-scale-down" />
                  </div>
                ))}

              </ul>
              <p className="flex justify-end pb-4 pr-8 text-sm text-bluegray-600 italic">
                * Not listed but still loved: AWS, MySQL and Twilio.
              </p>
      </div>
          <div className="mt-24 flex-col text-center">
                <h2 className="mt-8 text-bluegray-50 text-2xl font-serif ">API Integration Experience</h2>
                <p className="pt-2 pb-8 mx-16  text-xl text-bluegray-400 font-serif italic">
                  We're no stranger to integrating with existing third-party solutions.
                </p>
          </div>

          <div className="bg-bluegray-50 shadow-lg rounded-lg m-8">
          <ul role="list" className=" grid grid-cols-3 gap-x-4 gap-y-8 lg:grid-cols-3 xl:gap-x-8 ">
                {servicestack.map((service) => (
                  <div key={service.source} className="relative flex h-36 p-4 sm:p-8 justify-center">
                      <img src={service.source} alt="" className="object-scale-down" />
                  </div>
                ))}
         </ul>
              <p className="flex justify-end pb-4 pr-8 text-sm text-bluegray-600 italic">
                * Not listed but still loved: Salesforce, Shopify, Google Workspace, SAP, Excel and Smartsheet.
              </p>
        </div>
              <div className="relative mt-32 py-16">
                   <div className="hidden absolute top-0 inset-x-0 h-1/2 bg-bluegray-300 lg:block" aria-hidden="true" />
                   <div className="max-w-7xl mx-auto bg-bluegray-900 lg:bg-transparent lg:px-8">
                     <div className="lg:grid lg:grid-cols-12">
                       <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                         <div className="absolute inset-x-0 h-1/2 bg-bluegray-300 lg:hidden" aria-hidden="true" />
                         <div className="max-w-md mx-auto px-8 sm:max-w-3xl sm:px-8 lg:max-w-none lg:p-0 pt-16 lg:pt-0">
                           <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                             <img
                               className="object-cover object-center rounded-3xl shadow-2xl "
                               src="group/working_ty.jpg"
                               alt=""
                             />
                           </div>
                         </div>
                       </div>

                       <div className="relative bg-bluegray-900 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">

                         <div className="relative max-w-md mx-auto py-12 px-8 space-y-6 sm:max-w-3xl sm:py-16 sm:px-8 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                           <h2 className="text-3xl font-bold text-bluegray-200" id="join-heading">
                             Ready to get started?
                           </h2>
                           <p className="text-lg text-bluegray-200">
                             Nothing would make us happier to brainstorm with you and see what Untether can offer your business or school.
                           </p>
                           <a
                             className="block w-full py-3 px-5 text-center bg-yellow-400 rounded-full shadow-md text-xs font-medium text-bluegray-900 hover:bg-bluegray-900 hover:text-yellow-400 border-2 uppercase border-yellow-400 sm:inline-block sm:w-auto"
                             href="/contact"
                           >
                             Get In Touch
                           </a>
                         </div>
                       </div>

                     </div>
                   </div>
                 </div>

    </div>
  );
}

function Services() {
  return (

    <div className="">
    <div className="bg-bluegray-900">
      <div className=" max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-yellow-400 tracking-wide uppercase p-4">Services</h2>
          <p className="mt-1 text-4xl font-extrabold text-bluegray-50 sm:text-5xl sm:tracking-tight capitalize lg:text-6xl mb-12">
        What can we offer your business?
          </p>



              <p className="max-w-xl mt-5 mx-auto text-xl text-bluegray-300 font-serif">
                "Don't tell me the sky's the limit when there are footprints on the moon."
              </p>
              <p className="italic text-bluegray-500 font-serif">- Paul Brandt</p>



        </div>
      </div>
     </div>

    <div className="max-w-screen bg-bluegray-50">
     <div className="py-8 max-w-7xl mx-auto overflow-hidden sm:grid sm:grid-cols-2">
           {serviceslist.map((serviceslist, serviceslistIdx) => (
             <div key={serviceslist.title}
               className={classNames( 'p-6 ')}>
               <div className="mt-8">
                 <span
                   className={classNames(
                     serviceslist.iconBackground,
                     serviceslist.iconForeground,
                     'rounded-lg p-3 shadow inline-block'
                   )}>
                   <serviceslist.icon className="h-6 w-6" aria-hidden="true" />
                 </span>
                 <h3 className="text-lg font-medium inline-block align-top pl-5 pt-2 text-bluegray-800">
                     {serviceslist.title}
                 </h3>
                 <p className="mt-2 text-sm text-bluegray-500 border-b-2 border-bluegray-200 pb-8">
                    {serviceslist.description}
                 </p>
               </div>

             </div>
           ))}
         </div>
      </div>
        <div className="relative bg-bluegray-900">
              <div className="hidden xl:block h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
                <div className="h-full w-full xl:grid xl:grid-cols-2">
                  <div className="h-full xl:relative xl:col-start-2">
                    <img
                      className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                      src="group/working_jonathan.jpg"
                      alt="People working"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bluegray-900 to-bluegray-800 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                    />
                  </div>
                </div>
              </div>


              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                <div className="relative pt-12 xl:pb-64 sm:pt-24 pb-16 xl:col-start-1 xl:pb-24">
                  <h2 className="text-sm font-semibold text-yellow-400 tracking-wide uppercase">Save time and money</h2>
                  <p className="mt-3 text-3xl font-extrabold text-bluegray-50">
                    Get actionable data that will help grow your business
                  </p>
                  <p className="mt-5 text-lg text-bluegray-300">
                    Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare
                    feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus
                    nibh integer quis. Eu vulputate diam sit tellus quis at.
                  </p>
                  <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                    {metrics.map((item) => (
                      <p key={item.id}>
                        <span className="block text-2xl font-bold text-bluegray-50">{item.stat}</span>
                        <span className="mt-1 block text-base text-bluegray-400">
                          <span className="font-medium text-bluegray-50">{item.emphasis}</span> {item.rest}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative py-16">
                 <div className="hidden absolute top-0 inset-x-0 h-1/2 bg-bluegray-300 lg:block" aria-hidden="true" />
                 <div className="max-w-7xl mx-auto bg-bluegray-900 lg:bg-transparent lg:px-8">
                   <div className="lg:grid lg:grid-cols-12">
                     <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                       <div className="absolute inset-x-0 h-1/2 bg-bluegray-300 lg:hidden" aria-hidden="true" />
                       <div className="max-w-md mx-auto px-8 sm:max-w-3xl sm:px-8 lg:max-w-none lg:p-0">
                         <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                           <img
                             className=" object-cover object-center rounded-3xl shadow-2xl "
                             src="office.jpg"
                             alt=""
                           />
                         </div>
                       </div>
                     </div>

                     <div className="relative bg-bluegray-900 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">

                       <div className="relative max-w-md mx-auto py-12 px-8 space-y-6 sm:max-w-3xl sm:py-16 sm:px-8 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                         <h2 className="text-3xl font-bold text-bluegray-200" id="join-heading">
                           Want to work with us?
                         </h2>
                         <p className="text-lg text-bluegray-200">
                           Nothing would make us happier to brainstorm with you and see what Untether can offer your business or school.
                         </p>
                         <a
                           className="block w-full py-3 px-5 text-center bg-yellow-400 rounded-full shadow-md text-xs font-medium text-bluegray-900 hover:bg-bluegray-900 hover:text-yellow-400 border-2 uppercase border-yellow-400 sm:inline-block sm:w-auto"
                           href="/contact"
                         >
                           Get In Touch
                         </a>
                       </div>
                     </div>

                   </div>
                 </div>
               </div>


    </div>

  );
}

function Education() {
  return (
    <div className="relative bg-bluegray-50 overflow-hidden">



        <div className="max-w-7xl mx-auto lg:flex ">

          <div className="relative z-10  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-6xl tracking-loose font-extrabold text-bluegray-800 md:text-7xl ">
                  <span className="block xl:inline leading-tight">Using technology makes schools</span>{' '}
                  <span className="block text-emerald-500 xl:inline">better</span>
                </h1>
                <p className="mt-3 text-base text-bluegray-700 sm:mt-5 sm:text-lg sm:max-w-md sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Let's embolden students to develop the skills to learn and create with technology together.
                </p>
                <div className="my-8 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-full shadow max-w-xs mx-auto sm:m-0">
                    <a
                      href="contact"
                      className="uppercase flex items-center justify-center px-8 py-3 border-2 border-transparent rounded-full text-bluegray-50 bg-emerald-500 hover:bg-emerald-400 md:py-4 md:px-10"
                    >
                      Get In Touch
                    </a>
                  </div>

                </div>
              </div>
            </main>
          </div>

          <div className="mr-8 mt-8 w-screen lg:max-w-xl">
            <img
              className="hidden lg:block rounded-full object-cover text-center"
              src="hourofcodesquare.jpg"
              alt=""
            />
            <img
              className="lg:hidden objectPosition-crop height-300"
              src="media/hourofcode.jpg"
              alt=""
            />
          </div>

        </div>





        <div className="py-12 bg-bluegray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                  <h2 className="text-base text-emerald-500 font-semibold tracking-wide uppercase">Educator services</h2>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-bluegray-800 sm:text-4xl">
                    What does Instructional Technology look like?
                  </p>
                  <p className="mt-4 max-w-2xl text-xl text-bluegray-500 lg:mx-auto">
                    Having a plan in place for embedded teacher training and support is the primary way to ensure success in a digital initiative.
                  </p>
                </div>

                <div className="mt-10">
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    {edservices.map((feature) => (
                      <div key={feature.name} className="relative">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-bluegray-50">
                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>


        <div className="bg-bluegray-50 ">
             <div className="relative w-screen">
               <div className="relative py-24 px-8 bg-gradient-to-b from-emerald-500  to-bluegray-900 shadow-lg overflow-hidden lg:px-16 lg:grid lg:grid-cols-5 lg:gap-x-8">
                 <div className="absolute bottom-0 left-0 opacity-50 filter saturate-0 mix-blend-multiply invisible sm:visible ">
                   <img
                     src="crayons.jpg"
                     alt=""
                     className=""
                   />
                 </div>
                 <div className=" relative lg:col-start-2 lg:col-span-3  m-auto">
                   <blockquote className=" text-bluegray-50 text-center">
                     <p className="text-xl sm:text-2xl italic font-serif">
                       "Casie Barksdale has provided, by far, the best professional development I have received at Oneonta City in the past 19 years.
                       Her knowledge of the latest tech tools and her deliverance is well worth the time to sit through and actually learn something I can implement in my classroom."
                     </p>
                     <footer className="mt-6">
                       <p className="flex flex-col font-medium">
                         <span>Wendy Smithson</span>
                         <span>Teacher at Oneonta City Schools</span>
                       </p>
                     </footer>
                   </blockquote>
                 </div>
               </div>
             </div>
           </div>



        <div className="bg-bluegray-900">
              <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
                <div className="text-center">
                  <h2 className="text-lg leading-8 font-semibold text-emerald-400 uppercase tracking-wider">Customize your training</h2>
                  <p className="mt-2 text-3xl font-extrabold text-bluegray-50 sm:text-4xl lg:text-5xl">
                    Professional Development Day Options
                  </p>
                  <p className="mt-3 max-w-4xl mx-auto text-xl text-bluegray-300 sm:mt-5 ">
                    Our training packages are customizable based upon your school or district's needs.
                  </p>
                </div>
              </div>

              <div className="mt-16 bg-bluegray-50 pb-12 lg:mt-20 lg:pb-20">
                <div className="relative z-0">
                  <div className="absolute inset-0 h-5/6 bg-bluegray-900 lg:h-2/3" />
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative lg:grid lg:grid-cols-7">
                      <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                        <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                          <div className="flex-1 flex flex-col">
                            <div className="bg-bluegray-50 px-6 py-10">
                              <div>
                                <h3 className="text-center text-2xl font-medium text-bluegray-900" id="tier-hobby">
                                  Full Day - Planning Cycles
                                </h3>

                              </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-between border-t-2 border-bluegray-100 p-6 bg-bluegray-50 sm:p-10 lg:p-6 xl:p-10">
                              <ul className="space-y-4">
                                {planningFeatures.map((feature) => (
                                  <li key={feature} className="flex items-start">
                                    <div className="flex-shrink-0">
                                      <CheckIcon className="flex-shrink-0 h-6 w-6 text-emerald-500" aria-hidden="true" />
                                    </div>
                                    <p className="ml-3 text-base font-medium text-bluegray-500">{feature}</p>
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-8">
                                <div className="rounded-full shadow-md">
                                  <a
                                    href="contact"
                                    className="block w-full text-center rounded-full border border-transparent bg-bluegray-50 px-6 py-3 text-sm uppercase font-medium text-emerald-500 hover:bg-emerald-500 hover:text-bluegray-50"
                                    aria-describedby="tier-hobby"
                                  >
                                    Request more information
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                        <div className="relative z-10 rounded-lg shadow-xl">
                          <div
                            className="pointer-events-none absolute inset-0 rounded-lg border-2 border-emerald-500"
                            aria-hidden="true"
                          />
                          <div className="absolute inset-x-0 top-0 transform translate-y-px">
                            <div className="flex justify-center transform -translate-y-1/2">
                              <span className="inline-flex rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-bluegray-50">
                                Best Value
                              </span>
                            </div>
                          </div>
                          <div className="bg-bluegray-50 rounded-t-lg px-6 pt-12 pb-10">
                            <div>
                              <h3 className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                                Full Day - Full PD
                              </h3>

                            </div>
                          </div>
                          <div className="border-t-2 border-bluegray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                            <ul className="space-y-4">
                              {fulldayFeatures.map((feature) => (
                                <li key={feature} className="flex items-start">
                                  <div className="flex-shrink-0">
                                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-emerald-500" aria-hidden="true" />
                                  </div>
                                  <p className="ml-3 text-base font-medium text-bluegray-500">{feature}</p>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-10">
                              <div className="rounded-full shadow-md">
                                <a
                                  href="contact"
                                  className="block w-full text-center rounded-full border border-transparent bg-emerald-500 px-6 py-4 text-lg uppercase leading-6 font-medium text-bluegray-50 hover:bg-emerald-400"
                                  aria-describedby="tier-growth"
                                >
                                  Request more information
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                        <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                          <div className="flex-1 flex flex-col">
                            <div className="bg-bluegray-50 px-6 py-10">
                              <div>
                                <h3 className="text-center text-2xl font-medium text-bluegray-900" id="tier-scale">
                                  Full Day - Half/Half Cycle
                                </h3>

                              </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-between border-t-2 border-bluegray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                              <ul className="space-y-4">
                                {halfhalfFeatures.map((feature) => (
                                  <li key={feature} className="flex items-start">
                                    <div className="flex-shrink-0">
                                      <CheckIcon className="flex-shrink-0 h-6 w-6 text-emerald-500" aria-hidden="true" />
                                    </div>
                                    <p className="ml-3 text-base font-medium text-bluegray-500">{feature}</p>
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-8">
                                <div className="rounded-full shadow-md">
                                  <a
                                    href="contact"
                                    className="uppercase block w-full text-center rounded-full border border-transparent bg-bluegray-50 px-6 py-3 text-sm font-medium text-emerald-500 hover:bg-emerald-500 hover:text-bluegray-50"
                                    aria-describedby="tier-scale"
                                  >
                                    Request more information
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-bluegray-50 pb-16">
                  <div className="relative ">
                    <div aria-hidden="true" className="hidden sm:block">

                    </div>
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                      <div className="relative rounded-2xl px-6 py-10 bg-bluegray-900 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                        <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                          <svg
                            className="absolute inset-0 h-full w-full"
                            preserveAspectRatio="xMidYMid slice"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 1463 360"
                          >
                            <path
                              className="text-bluegray-500 text-opacity-40"
                              fill="currentColor"
                              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                            />
                            <path
                              className="text-bluegray-700 text-opacity-40"
                              fill="currentColor"
                              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                            />
                          </svg>
                        </div>
                        <div className="relative">
                          <div className="sm:text-center">
                            <h2 className="text-3xl font-bold text-bluegray-50  sm:text-4xl">
                              Need more time to decide?
                            </h2>
                            <p className="mt-6 mx-auto max-w-2xl text-lg text-bluegray-200">
                            Enter your email below to receive a sample proposal and occassional free educational resources to keep you up to date with the latest educational technology.
                            </p>
                          </div>
                          <form action="https://api.mailslurp.com/forms" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex" method="post">
                          <input type="hidden" name="_to" value="admin@untetherllc.com" />
                          <input type="hidden" name="_redirectTo" value="https://untetherllc.com/thanksforsubscribing" />
                            <div className="min-w-0 flex-1">
                              <label htmlFor="cta-email" className="sr-only">
                                Email address
                              </label>
                              <input
                                name="email"
                                id="cta-email"
                                type="email"
                                className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-emerald-900 placeholder-bluegray-300 shadow-sm focus:outline-none focus:border-transparent focus:ring-1 focus:ring-bluegray-50 focus:ring-offset-2 focus:ring-offset-emerald-400"
                                placeholder="Enter your email"
                              />
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-3">
                              <button
                                type="submit"
                                className="block w-full rounded-full border border-transparent px-5 py-3 bg-emerald-500 text-sm font-medium text-bluegray-50 shadow hover:bg-emerald-400 uppercase hover:text-bluegray-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-500 sm:px-10"
                              >
                                subscribe
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>






           </div>
  );
}

function Inthemedia() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-bluegray-50 h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base text-emerald-500 font-semibold tracking-wide uppercase">In The Media</h2>
          <p className="mt-2 text-3xl leading-8 capitalize font-extrabold tracking-tight text-bluegray-800 sm:text-4xl">
            Some people think we're cool
          </p>
          <p className="mt-4 max-w-2xl text-xl text-bluegray-500 lg:mx-auto">
            Take a look at some of the places we've been and hear from people we've met along the way.
          </p>
        </div>


        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div  className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="w-full object-cover" src="media/podcast.jpg" alt="" />
              </div>
              <div className="flex-1 bg-bluegray-50 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-emerald-500">
                      MP3
                  </p>

                    <p className="text-xl font-semibold text-gray-900">Politics and Moore Podcast</p>
                    <p className="mt-3 text-base text-gray-500">Untether is passionate about being a motivator in the community of entrepreneurship and we are so thankful to have come to mind when discussing business ownership.</p>
                    <audio controls="controls" src="media/politicsandmoore.m4a" className="m-4"></audio>

                </div>
                <div className="mt-6 flex items-center mx-auto">
                  <div className="flex-shrink-0">
                    <a href="https://www.wvnn.com/politics-and-moore-sat-11am-12pm/">
                      <span className="sr-only"></span>
                      <img className="h-auto w-24" src="logos/wvnn.png" alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                        Guest Speaker Ryan Knight
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time >2021</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>Shannon Moore</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div  className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
              <a href="https://www.enewscourier.com/news/javascript-is-a-girl-s-best-friend-tanner-introduces-students/article_105256a8-9f95-11e5-b9c5-d7d2f4a905e9.html">
                <img className="w-full object-cover" src="media/hourofcode.jpg" alt="" />
              </a>
              </div>
              <div className="flex-1 bg-bluegray-50 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-emerald-500 uppercase">
                      Article
                  </p>

                    <p className="text-xl font-semibold text-gray-900">The News Courier</p>
                    <p className="mt-3 text-base text-gray-500">"The potential for children to develop innovative concepts with software exists now, because it's easy for students to be near a computer and learn programming. It's different than most career fields because it doesn't require a lot of up-front cost or specialized knowledge."</p>

                </div>
                <div className="mt-6 flex items-center mx-auto">
                  <div className="flex-shrink-0">
                    <a href="https://www.enewscourier.com/news/javascript-is-a-girl-s-best-friend-tanner-introduces-students/article_105256a8-9f95-11e5-b9c5-d7d2f4a905e9.html">
                      <span className="sr-only"></span>
                      <img className="h-auto w-12" src="logos/newscourier.png" alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 italic capitalize">
                        JavaScript is a girl's best friend
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time >2015</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>Hour of Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


        </div>
      </div>
    </div>
  );
}




function Contact() {
  const [agreed, setAgreed] = useState(false)


    return (
      <div className="bg-bluegray-50 py-16 px-4 overflow-hidden sm:px-6 lg:px-16 lg:py-24 grid md:grid-cols-2">


      <div className="aspect-w-12 md:mr-8 aspect-h-7 lg:aspect-none">
        <img
          className="rounded-lg shadow-lg object-cover object-center"
          src="office.jpg"
          alt="Office Photo"  />
      </div>


      <div className="relative md:ml-8 my-16 md:my-auto lg:mt-0">

          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-lightblue-900 sm:text-4xl">Let's Work Together</h2>
            <p className="mt-4 text-lg leading-6 text-bluegray-500">
              We'd love to hear from you! Send us a message using the form below and let's get your project started.
            </p>
          </div>
          <div className="mt-12">
            <form action="https://api.mailslurp.com/forms" method="post" className="sm:grid sm:grid-cols-1 sm:gap-y-6 sm:grid-cols-2 sm:gap-x-8" enctype="multipart/form-data" name="EmailForm">
            <input type="hidden" name="_to" value="admin@untetherllc.com" />
            <input type="hidden" name="_redirectTo" value="https://untetherllc.com/success" />
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-bluegray-700">
                  First name
                </label>
                <div className="mt-1 mb-3 sm:mb-0">
                  <input
                    type="text"
                    name="name"
                    id="first-name"
                    autoComplete="given-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-yellow-400 focus:border-yellow-400 border-bluegray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-bluegray-700">
                  Last name
                </label>
                <div className="mt-1 mb-3 sm:mb-0">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-yellow-400 focus:border-yellow-400 border-bluegray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium text-bluegray-700">
                  Company or School
                </label>
                <div className="mt-1 mb-3 sm:mb-0">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-yellow-400 focus:border-yellow-400 border-bluegray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-bluegray-700">
                  Email
                </label>
                <div className="mt-1 mb-3 sm:mb-0">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-yellow-400 focus:border-yellow-400 border-bluegray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-medium text-bluegray-700">
                  Phone Number
                </label>
                <div className="mt-1 mb-3 sm:mb-0 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-bluegray-500 focus:ring-yellow-400 focus:border-yellow-400 rounded-md"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="py-3 px-4 block w-full pl-20 focus:ring-yellow-400 focus:border-yellow-400 border-bluegray-300 rounded-md "
                    placeholder="+1 (555) 867-5309"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-bluegray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className=" mb-3 sm:mb-0 py-3 px-4 block w-full shadow-sm focus:ring-yellow-400 focus:border-yellow-400 border border-bluegray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
{
  /* Checkbox for temporary bug routing? */

  /*
                <div className="relative flex items-start">
                  <div className="flex items-center">
                    <input id="activecustomer" className="focus:ring-yellow-400 text-yellow-400 border-bluegray-300 rounded" type="checkbox" class="form-checkbox"/>
                  </div>
                  <div className="ml-4">
                    <label htmlFor="activecustomer" className="text-sm text-red-400">
                      Check here
                    </label>
                  </div>
                </div>
*/
}

              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-sm font-medium uppercase text-bluegray-900 bg-yellow-400 hover:bg-bluegray-900 hover:text-bluegray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

function Blog() {
  return (
    <div className="bg-yellow-400">
      <h2>Blog</h2>
    </div>
  );
}

function NotFoundPage() {
  return (

    <div
        className="min-h-screen bg-center"
        style={{
          backgroundImage: "url('/404background.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-yellow-400 text-sm font-semibold text-black uppercase tracking-wide">404 error</p>
          <h1 className="text-bluegray-50 mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Uh oh! I think you’re lost.
          </h1>
          <p className="text-bluegray-50 mt-2 text-lg font-medium">
            It looks like the page you’re looking for doesn't exist.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="inline-flex justify-center items-center p-4 w-48 border-2 border-yellow-400 text-sm font-normal tracking-wider uppercase rounded-full text-bluegray-800 bg-yellow-400 hover:bg-transparent hover:text-yellow-400 hover:font-bold"
            >
              Go back home
            </a>
          </div>
        </div>
      </div>

  );
}

function SuccessPage() {
  return (

    <div
        className="min-h-screen bg-center"
        style={{
          backgroundImage: "url('/404background.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-yellow-400 text-sm font-semibold text-black uppercase tracking-wide">success</p>
          <h1 className="text-bluegray-50 mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Thanks for submitting your request!
          </h1>
          <p className="text-bluegray-50 mt-2 text-lg font-medium">
            Someone will reach back out to you in 1-2 business days.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="inline-flex justify-center items-center p-4 w-48 border-2 border-yellow-400 text-sm font-normal tracking-wider uppercase rounded-full text-bluegray-800 bg-yellow-400 hover:bg-transparent hover:text-yellow-400 hover:font-bold"
            >
              Fly back home
            </a>
          </div>
        </div>
      </div>
  );
}

function ThanksForSubscribing() {
  return (

    <div
        className="min-h-screen bg-center"
        style={{
          backgroundImage: "url('/404background.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-yellow-400 text-sm font-semibold text-black uppercase tracking-wide">success</p>
          <h1 className="text-bluegray-50 mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Thanks for subscribing to our Education Newsletter!
          </h1>
          <p className="text-bluegray-50 mt-2 text-lg font-medium">
            You'll receive updates, tips and tricks to make digital initiatives a little bit easier.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="inline-flex justify-center items-center p-4 w-48 border-2 border-yellow-400 text-sm font-normal tracking-wider uppercase rounded-full text-bluegray-800 bg-yellow-400 hover:bg-transparent hover:text-yellow-400 hover:font-bold"
            >
              Fly back home
            </a>
          </div>
        </div>
      </div>
  );
}


function FooterOnly() {
  return (
    <div className="relative py-16">
         <div className="hidden absolute top-0 inset-x-0 h-1/2 bg-bluegray-300 lg:block" aria-hidden="true" />
         <div className="max-w-7xl mx-auto bg-bluegray-900 lg:bg-transparent lg:px-8">
           <div className="lg:grid lg:grid-cols-12">
             <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
               <div className="absolute inset-x-0 h-1/2 bg-bluegray-300 lg:hidden" aria-hidden="true" />
               <div className="max-w-md mx-auto px-8 sm:max-w-3xl sm:px-8 lg:max-w-none lg:p-0">
                 <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                   <img
                     className=" object-cover object-center rounded-3xl shadow-2xl "
                     src="office.jpg"
                     alt=""
                   />
                 </div>
               </div>
             </div>

             <div className="relative bg-bluegray-900 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">

               <div className="relative max-w-md mx-auto py-12 px-8 space-y-6 sm:max-w-3xl sm:py-16 sm:px-8 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                 <h2 className="text-3xl font-bold text-bluegray-200" id="join-heading">
                   Want to work with us?
                 </h2>
                 <p className="text-lg text-bluegray-200">
                   Nothing would make us happier to brainstorm with you and see what Untether can offer your business or school.
                 </p>
                 <a
                   className="block w-full py-3 px-5 text-center bg-yellow-400 rounded-full shadow-md text-xs font-medium text-bluegray-900 hover:bg-bluegray-900 hover:text-yellow-400 border-2 uppercase border-yellow-400 sm:inline-block sm:w-auto"
                   href="/contact"
                 >
                   Get In Touch
                 </a>
               </div>
             </div>

           </div>
         </div>
       </div>
  );
}
