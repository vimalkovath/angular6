export const menus = [
  {
    'name': 'Dashboard',
    'icon': 'dashboard',
    'link': false,
    'open': false,
    'chip': { 'value': 1, 'color': 'accent' },
    'sub': [
      {
        'name': 'Dashboard',
        'link': '/auth/dashboard',
        'icon': 'dashboard',
        'chip': false,
        'open': true,
      }
    ]
  },

  {
    'name': 'Pages',
    'icon': 'content_copy',
    'open': false,
    'link': false,
    'sub': [
      {
        'name': 'Login',
        'icon': 'work',
        'open': false,
        'link': '../login',
      },
      {
        'name': 'Register',
        'icon': 'local_laundry_service',
        'open': false,
        'link': '../register',
      },
      {
        'name': 'About',
        'icon': 'album',
        'open': false,
        'link': '/auth/about',
      },
      {
        'name': 'blog',
        'icon': 'filter_list',
        'open': false,
        'link': '/auth/blogs',
      }
    ]
  },

];
