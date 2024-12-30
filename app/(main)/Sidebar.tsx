const navigation = [
  { name: 'Dashboard', href: '', icon: DashboardIcon },
  { name: 'Comments', href: '/comments', icon: NewCommentIcon },
  { name: 'Subscribers', href: '/subscribers', icon: SubscriberIcon },
  { name: 'Newsletters', href: '/newsletters', icon: TiltedSendIcon },
]

<Link
  href="/"
  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 dark:text-slate-50 dark:hover:bg-slate-800"
>
  <HomeIcon className="h-5 w-5" aria-hidden="true" />
  Back to Frontend
</Link> 