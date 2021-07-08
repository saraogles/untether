import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
BookmarkAltIcon,
CalendarIcon,
IdentificationIcon,
CursorClickIcon,
ShieldCheckIcon,
SupportIcon,
OfficeBuildingIcon,
CogIcon,
 BriefcaseIcon,
 DesktopComputerIcon,
 GlobeAltIcon,
 InformationCircleIcon,
 NewspaperIcon,
 UserGroupIcon,
 MailOpenIcon,
 UsersIcon,
 CameraIcon,
 AcademicCapIcon,
 BadgeCheckIcon,
 CashIcon,
 ClockIcon,
 ReceiptRefundIcon,
} from '@heroicons/react/outline'
import {
  ChevronDownIcon,
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  MailIcon,
  PhoneIcon,
  CheckIcon,
} from '@heroicons/react/solid'

//homepage
const features = [
{
name: 'Our greatest strength lies in the ability to make your business run more smoothly.',
href: '/services',
button: 'Our Favorite Services',
description: 'We believe in Product Minded Development, which means your needs come first. We thrive on building services that connect disparate systems and automating tedious manual tasks, making your worklife better.',
icon: CursorClickIcon,
},
{
name: "We solve real problems for real businesses, just like yours.",
href: '/ourwork',
button: 'See Our Work',
description: "With 50 years of collective experience, we are committed to designing a solution to fit your specific business model. We have worked in both commercial and government spaces, manufacturing plants to showroom floors, landing page websites and online storefronts.",
icon: CogIcon,
},
{
name: "If a solution exists, we'll find it, and if it doesn't, we'll build it.",
href: '#',
button: 'The Technologies We Use',
description: "We handle everything from backend database development to the frontend UI layer, committing to a solid user experience for everyone involved. We are proficient in C#, Javascript and Ruby and have a special love for web and mobile applications.",
icon: OfficeBuildingIcon },
]

const passionate = [
{
name: '". . . about your growing business"',
href: '/ourwork',
button: 'Learn More',
description: 'We are as dedicated to your dreams as we are our own. We get excited about entrepreneurship and watching small businesses grow and would love to be part of your story. We are here to help you find, develop and integrate technical efficiencies and automations so you can keep dreaming big.',
icon: CursorClickIcon,
imageUrl: 'aimee.png',
},
{
name: '". . . about training educators in techology"',
href: '/educatorservices',
button: 'Learn More',
description: "Integrating technology in the classroom doesn't have to be daunting. We're here to help you take these new tools and add efficiency and easier access to knowledge in your classrooms everyday. Whether you're intimidated by the techology itself or the endless list of options, we are with you until technology makes your day better, not worse.",
icon: CogIcon,
imageUrl: 'aimee.png',
},

]


const edresources = [
{
name: 'Educator Services',
description: 'Get all of your questions answered in our forums or contact support.',
href: '/educatorservices',
icon: SupportIcon,
},
{
name: 'Untethered Blog',
description: 'Learn how to maximize our platform to get the most out of it.',
href: '/blog',
icon: BookmarkAltIcon,
},
{
name: 'In The Media',
description: 'See what meet-ups and other events we might be planning near you.',
href: '/inthemedia',
icon: CalendarIcon,
},
{ name: 'Educator Portal', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]


const enterprise = [
  { name: 'See Our Work', href: '/ourwork', icon: InformationCircleIcon },
  { name: 'Technologies We Use', href: '/technologies', icon: OfficeBuildingIcon },
  { name: 'Services', href: '/services', icon: NewspaperIcon },
  { name: 'Meet Our Team', href: '/team', icon: BriefcaseIcon },
  { name: 'Business Portal', href: '#', icon: ShieldCheckIcon },
]
const education = [
  { name: 'Educator Services', href: '/educatorservices', icon: UserGroupIcon },
  { name: 'Untethered Blog', href: '/blog', icon: GlobeAltIcon },
  { name: 'In the Media', href: '/inthemedia', icon: BookmarkAltIcon },
  { name: 'Educator Portal', href: '#', icon: DesktopComputerIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
  },
]
const navigation = {

  education: [
    { name: 'Educator Services', href: '/educatorservices' },
    { name: 'Untethered Blog', href: '/blog' },
    { name: 'In The Media', href: '/inthemedia' },
    { name: 'Educator Portal', href: '#' },
  ],
  enterprise: [
    { name: 'See Our Work', href: '/ourwork' },
    { name: 'Technologies We Use', href: '/technologies' },
    { name: 'Services', href: '/services' },
    { name: 'Meet Our Team', href: '/team' },
    { name: 'Business Portal', href: '#' },

  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
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
      href: '#',
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
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },

    {
      name: 'Dribbble',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
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
  { id: 1, name: 'Cups of Coffee', stat: '14,600', icon: UsersIcon },
  { id: 2, name: 'Lines of Code', stat: '77,000', icon: MailOpenIcon},
  { id: 3, name: 'Happy Clients', stat: '37', icon: CursorClickIcon},
  { id: 1, name: 'Cups of Coffee', stat: '14,600', icon: UsersIcon },
  { id: 2, name: 'Lines of Code', stat: '77,000', icon: MailOpenIcon},
  { id: 3, name: 'Happy Clients', stat: '37', icon: CursorClickIcon},
]


const peoples = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Founder & CEO',
    email: 'janecooper@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Director of Technology',
    email: 'janecooper@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'UX Designer & Product Manager',
    email: 'janecooper@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Senior Engineer',
    email: 'janecooper@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
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

const coding = [
  {
    id: 1,
    title: "C#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    title: "Ruby",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    title: "Javascript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    title: "Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

//technologies

//services

const actions = [
  {
    title: 'API Integrations',
    icon: ClockIcon,
    iconForeground: 'text-emerald-100',
    iconBackground: 'bg-emerald-500',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

  },
  {
    title: 'Custom Automations',
    icon: BadgeCheckIcon,
    iconForeground: 'text-indigo-100',
    iconBackground: 'bg-indigo-500',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

  },
  {
    title: 'Webmaster Services',
    icon: UsersIcon,
    iconForeground: 'text-blue-100',
    iconBackground: 'bg-blue-500',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

  },
  { title: 'Third-Party Integrations',
  icon: CashIcon,
  iconForeground: 'text-lime-100',
  iconBackground: 'bg-lime-500',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
},

  {
    title: 'Database Development',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-100',
    iconBackground: 'bg-rose-500',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

  },
  {
    title: 'Technology Education',
    icon: AcademicCapIcon,
    iconForeground: 'text-cyan-100',
    iconBackground: 'bg-cyan-500',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

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
    client: 'IMG_4985.HEIC',
    caption: '3.9 MB',
    project: 'test',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    client: 'IMG_4985.HEIC',
    caption: '3.9 MB',
    project: 'test',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    client: 'IMG_4985.HEIC',
    caption: '3.9 MB',
    project: 'test',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    client: 'IMG_4985.HEIC',
    caption: '3.9 MB',
    project: 'test',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    client: 'IMG_4985.HEIC',
    caption: '3.9 MB',
    project: 'test',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    client: 'IMG_4985.HEIC',
    caption: '3.9 MB',
    project: 'test',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    client: 'IMG_4985.HEIC',
    caption: '3.9 MB',
    project: 'test',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    client: 'IMG_4985.HEIC',
    caption: '3.9 MB',
    project: 'test',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
]

//ourwork

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
                        <h3 className="text-sm font-medium tracking-wide text-bluegray-500 uppercase">Education</h3>
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
                    <div className="bg-bluegray-200 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                      <div>
                        <h3 className="text-sm font-medium tracking-wide text-bluegray-500 uppercase">From the blog</h3>
                        <ul className="mt-6 space-y-6">
                          {blogPosts.map((post) => (
                            <li key={post.id} className="flow-root">
                              <a
                                href={post.href}
                                className="-m-3 p-3 flex rounded-lg hover:bg-bluegray-100 transition ease-in-out duration-150"
                              >
                                <div className="hidden sm:block flex-shrink-0">
                                  <img className="w-32 h-20 object-cover rounded-md" src={post.imageUrl} alt="" />
                                </div>
                                <div className="min-w-0 flex-1 sm:ml-8">
                                  <h4 className="text-base font-medium text-bluegray-900 truncate">{post.name}</h4>
                                  <p className="mt-1 text-sm text-bluegray-500">{post.preview}</p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6 text-sm font-medium">
                        <a href="#" className="text-lightblue-900 rounded-full p-2 hover:text-yellow-500  transition ease-in-out duration-150">
                          View all posts <span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/team">
            <Team />
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
          <Route path="/educatorservices">
            <Educatorservices />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/inthemedia">
            <Inthemedia />
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
                  src="untetherballoon.png"
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



                <div className="grid grid-cols-2 md:gap-8 items-start justify-items-center sm:justify-items-end">
                  <div>
                    <h3 className="text-sm font-semibold text-yellow-400 tracking-wider uppercase">Education</h3>
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

                  <div className="">
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

// You can think of these components as "pages"
// in your app.

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


        <div className="relative sm:pt-24 sm:pb-16 sm:inline-flex justify-center">

          <div className="sm:hidden">
            <img className="flex justify-items-end max-w-full" src="untetherballoon.png" alt="" />
          </div>

          <div className="z-40 px-4 sm:w-3/4 sm:px-16 max-w-2xl mx-auto">
            <h1 className="font-bold text-5xl sm:text-4xl md:text-5xl lg:text-7xl mb-12 tracking-wide">
              <span className="block text-bluegray-200 leading-tight">Your business</span>{' '}
              <span className="block text-bluegray-200 leading-tight">deserves the</span>{' '}
              <span className="block font-extrabold text-yellow-400 inline py-2 pl-16 -ml-16 border-b-8 border-yellow-400 leading-tight whitespace-nowrap 2xl:pl-0 2xl:ml-0">right</span>
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
                <a href="#"
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



            <div className="relative mt-12 lg:mt-24 md:flex items-center max-w-7xl ml-16 mr-16">


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
                    <a href="team" className="flex items-center justify-center ml-16 p-4 w-48 border-2 border-yellow-400 text-sm font-normal tracking-wider uppercase rounded-full text-bluegray-800 bg-yellow-400 hover:bg-transparent hover:text-yellow-400 hover:font-bold">
                      More About Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-20 -mx-4 relative lg:mt-0" aria-hidden="true">

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
                        <button href={feature.href} className="shadow p-4 mb-4 sm:-mt-2 text-xs tracking-wider uppercase text-bluegray-800 bg-yellow-400 border-2 border-yellow-400 rounded-full hover:border-yellow-500 hover:bg-bluegray-200 hover:text-bluegray-900">{feature.button}</button>
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
                <div className="flow-root mt-8 lg:mt-10">
                  <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img className="h-36" src="/bellavita.png" alt="Bella Vita" />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img className="h-36" src="/linex.png" alt="Line-X" />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img
                        className="h-36"
                        src="/logobrands.png"
                        alt="Logo Brands"
                      />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img
                        className="h-36"
                        src="/OHS.png"
                        alt="OHS"
                      />

                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img
                        className="h-36"
                        src="/blount.png"
                        alt="Blount County Schools"
                      />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img
                        className="h-36"
                        src="/caspari.png"
                        alt="Caspari"
                      />
                    </div>
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
                      <div className="shadow-md flow-root bg-bluegray-200 rounded-sm px-6">
                        <div className="-mt-6 h-auto">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 -mt-8">
                              <img className="h-32 w-32 md:h-56 md:w-56 flex-shrink-0" src={feature.imageUrl} alt=""/>
                            </span>
                          </div>
                          <div className="flex flex-wrap justify-center place-content-evenly h-120 m-4">
                            <h3 className="italic text-xl font-sans text-bluegray-900 tracking-tight">{feature.name}</h3>
                            <p className="text-md text-bluegray-600 font-serif">
                              {feature.description}
                            </p>
                            <button className="shadow p-4 mb-4 -mt-4 text-xs tracking-wider uppercase text-bluegray-900 bg-yellow-400 border-2 border-yellow-400 rounded-full hover:bg-transparent hover:text-bluegray-800">{feature.button}</button>
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
                       <div className="max-w-md mx-auto px-8 sm:max-w-3xl sm:px-8 lg:max-w-none lg:p-0">
                         <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                           <img
                             className="object-cover object-center rounded-3xl shadow-2xl mt-4"
                             src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
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
                           href="#"
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

function Team() {
  return (

    <div className="">

          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-yellow-400 tracking-wide uppercase p-4">Meet Our Team</h2>
              <p className="mt-1 text-4xl font-extrabold text-bluegray-50 sm:text-5xl sm:tracking-tight lg:text-6xl mb-12">
                If you need us, we'll be in the Cloud.
              </p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-bluegray-300 font-serif">
                "Don't tell me the sky's the limit when there are footprints on the moon."
              </p>
              <p className="italic text-bluegray-500 font-serif">- Paul Brandt</p>

            </div>
          </div>



      <div className="mt-6 bg-bluegray-200 relative shadow max-w-screen mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-16">

      <h2 className=" text-3xl font-normal uppercase text-lightblue-900 sm:tracking-wide  -mt-16 sm:-mt-20 lg:-mt-24 bg-bluegray-50 shadow rounded-full p-4 max-w-md m-auto">
      Our Aeronauts
      </h2>

        <div className="space-y-20 my-16">




          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
               {peoples.map((person) => (
                 <li
                   key={person.email}
                   className="col-span-1 flex flex-col text-center bg-bluegray-50 rounded-lg shadow divide-y divide-bluegray-200"
                 >
                   <div className="flex-1 flex flex-col p-8">
                     <img className="w-32 h-32 flex-shrink-0 mx-auto bg-bluegray-900 rounded-full" src={person.imageUrl} alt="" />
                     <h3 className="mt-6 text-bluegray-900 text-sm font-medium">{person.name}</h3>
                     <dl className="mt-1 flex-grow flex flex-col justify-between">
                       <dt className="sr-only">Title</dt>
                       <dd className="text-bluegray-500 text-sm">{person.title}</dd>
                       <dt className="sr-only">Role</dt>
                       <dd className="mt-3">
                         <span className="px-2 py-1 text-bluegray-800 text-xs font-medium bg-yellow-300 rounded-full">
                           {person.role}
                         </span>
                       </dd>
                     </dl>
                   </div>
                   <div>
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
                   </div>
                 </li>
               ))}
             </ul>






        </div>

      </div>


      <div className=" mt-8 mb-8 p-8 max-w-7xl m-auto">

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {stats.map((item)=>(

        <div key={item.id} className="grid m-4">
          <div className="bg-bluegray-200 rounded-full w-56 h-56 text-center grid content-center">
            <div className="-mt-24 bg-yellow-400 h-16 w-16 rounded-xl p-6 m-auto grid content-center justify-center">
              <item.icon className="h-8 w-8 text-bluegray-50" />
            </div>
            <p className="font-medium text-sm uppercase pt-6 text-bluegray-500"> {item.name}</p>
            <p className="font-medium text-4xl text-lightblue-900 "> {item.stat}</p>
          </div>
        </div>

        ))}

      </div>


      </div>

      <div className="bg-bluegray-900">
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

    </div>



  );
}

function Ourwork() {
  return (
    <div className="">



    <div className=" max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base font-semibold text-yellow-400 tracking-wide uppercase p-4">See our work</h2>
        <p className="mt-1 text-4xl font-extrabold text-bluegray-50 sm:text-5xl sm:tracking-tight capitalize lg:text-6xl mb-12">
clients we have helped
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl text-bluegray-300 font-serif">
          "Untether has saved me so much time and money automating things that used to take me hours."
        </p>
        <p className="italic text-bluegray-500 font-serif">- Random Client</p>
      </div>
   </div>

   <div className="bg-bluegray-200 ">
     <ul role="list" className=" grid justify-center mx-36 py-16 grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 ">
           {work.map((work) => (
             <li key={work.source} className="relative">
               <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-bluegray-100 focus-within:ring-yellow-400 overflow-hidden">
                 <img src={work.source} alt="" className="object-cover pointer-events-none group-hover:opacity-25" />
                 <button type="button" className="absolute inset-0 focus:outline-none">
                   <span className="sr-only">View details for {work.title}</span>
                 </button>
                 <p className="opacity-0 hover:opacity-100 font-bold text-bluegray-800 text-2xl text-center grid content-center">{work.project}</p>

               </div>
               <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{work.client}</p>
               <p className="block text-sm font-medium text-gray-500 pointer-events-none">{work.caption}</p>
             </li>
           ))}
         </ul>
     </div>

    </div>
  );
}

function Technologies() {
  return (
    <div className="">

      <div className=" max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <h2 className="text-base font-semibold text-yellow-400 tracking-wide uppercase p-4">Technologies We Use</h2>
          <p className="mt-1 text-4xl font-extrabold text-bluegray-50 sm:text-5xl sm:tracking-tight lg:text-6xl mb-12">
            Let's Talk About Tech
          </p>
        </div>
      </div>

        <div className="bg-bluegray-100 overflow-hidden">
              <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="hidden lg:block bg-bluegray-200 absolute top-0 bottom-0 left-3/4 w-screen" />
                <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                  <div>
                    <h2 className="text-base text-bluegray-500 font-semibold tracking-wide uppercase">More About us</h2>
                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-bluegray-800 sm:text-4xl">
                      Meet Whitney
                    </h3>
                  </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="relative lg:row-start-1 lg:col-start-2">

                    <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                      <figure>
                        <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                          <img
                            className="rounded-lg shadow-lg object-cover object-center"
                            src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                            alt="Whitney leaning against a railing on a downtown street"
                            width={1184}
                            height={1376}
                          />
                        </div>
                        <figcaption className="mt-3 flex text-sm text-gray-500">
                          <CameraIcon className="flex-none w-5 h-5 text-bluegray-400" aria-hidden="true" />
                          <span className="ml-2">Photograph by Marcus O’Leary</span>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="mt-8 lg:mt-0">
                    <div className="text-base max-w-prose mx-auto lg:max-w-none">
                      <p className="text-lg text-bluegray-500">
                        Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                        pellentesque. Blandit amet, sed aenean erat arcu morbi.
                      </p>
                    </div>
                    <div className="mt-5 prose prose-indigo text-bluegray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                      <p>
                        Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                        pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
                      </p>

                      <ul>
                        <li>Quis elit egestas venenatis mattis dignissim.</li>
                        <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                        <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                      </ul>
                      <p>
                        Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                        velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                        egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
                      </p>
                      <h3>How we helped</h3>
                      <p>
                        Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                        Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa,
                        lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
                      </p>

                    </div>
                  </div>
                </div>
              </div>


      </div>

      <div className="bg-bluegray-900">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div className="max-w-2xl lg:mx-auto lg:text-center">
                <h2 className="text-3xl font-extrabold tracking-wide text-yellow-400 sm:text-4xl">
                  Languages We Love
                </h2>
                <p className="mt-4 text-bluegray-400">
                  Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
                  Urna, sed a lectus elementum blandit et.
                </p>
              </div>
              <div className="mt-20">
                <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                  {coding.map((coding) => (
                    <div key={coding.id}>
                      <dt className="font-semibold text-bluegray-200">{coding.title}</dt>
                      <dd className="mt-3 text-bluegray-400">{coding.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

    </div>
  );
}

function Services() {
  return (

    <div>

      <div className=" max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-yellow-400 tracking-wide uppercase p-4">Services</h2>
          <p className="mt-1 text-4xl font-extrabold text-bluegray-50 sm:text-5xl sm:tracking-tight capitalize lg:text-6xl mb-12">
        What can we offer your business?
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-bluegray-300 font-serif">
            "Untether has saved me so much time and money automating things that used to take me hours."
          </p>
          <p className="italic text-bluegray-500 font-serif">- Random Client</p>
        </div>
     </div>

    <div className="max-w-screen bg-bluegray-50">
     <div className="py-8 max-w-7xl mx-auto overflow-hidden sm:grid sm:grid-cols-2  ">
           {actions.map((action, actionIdx) => (
             <div key={action.title}
               className={classNames( 'p-6 ')}>
               <div>
                 <span
                   className={classNames(
                     action.iconBackground,
                     action.iconForeground,
                     'rounded-lg inline-flex p-3 shadow'
                   )}
                 >
                   <action.icon className="h-6 w-6" aria-hidden="true" />
                 </span>
               </div>
               <div className="mt-8">
                 <h3 className="text-lg font-medium">
                     <span className="absolute inset-0" aria-hidden="true" />
                     {action.title}
                 </h3>
                 <p className="mt-2 text-sm text-bluegray-400 border-b-2 border-bluegray-200 pb-8">
                    {action.description}
                 </p>
               </div>

             </div>
           ))}
         </div>
      </div>

        <div className="relative bg-bluegray-900">
              <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
                <div className="h-full w-full xl:grid xl:grid-cols-2">
                  <div className="h-full xl:relative xl:col-start-2">
                    <img
                      className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                      src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                      alt="People working on laptops"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bluegray-900 to-bluegray-800 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                    />
                  </div>
                </div>
              </div>
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
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

    </div>
  );
}

function Educatorservices() {
  return (
    <div className="bg-yellow-400">
      <h2>Educator Services</h2>
    </div>
  );
}

function Inthemedia() {
  return (
    <div className="bg-yellow-400">
      <h2>In The Media</h2>
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
