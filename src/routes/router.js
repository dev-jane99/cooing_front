import {createBrowserRouter} from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import NotFound from '../pages/NotFound'
import About from '../pages/about/About'
import Showcase from '../pages/products/Showcase'
import ClassInfo from '../pages/class/ClassInfo'
import AdminLayout from '../pages/admin/AdminLayout';
import AnnouncementList from '../pages/admin/AnnouncementList';
import AnnouncementForm from '../pages/admin/AnnouncementForm';
import ApplicationList from '../pages/admin/ApplicationList'
import ApplicationDetail from '../pages/admin/ApplicationDetail'
import AnnouncementEdit from '../pages/admin/AnnouncementEdit'
import ClassDetail from '../pages/class/ClassDetail'
import ApplicationForm from '../pages/class/ApplicationForm'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/classInfo',
                element: <ClassInfo />
            },
            {
                path: '/class/:id',
                element: <ClassDetail />
            },
            {
                path: '/application',
                element: <ApplicationForm />
            },
            {
                path: '/showcase',
                element: <Showcase />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
          { index: true, element: <AnnouncementList /> },
          { path: 'announcements/new', element: <AnnouncementForm /> },
          { path: 'announcements/edit/:id', element: <AnnouncementEdit /> },
          { path: 'applications', element: <ApplicationList /> },
          {path: '/admin/applications/:id', element: <ApplicationDetail />}
        ]
      },
      
    {
        path: '*',
        element: <NotFound />
    }
])


export default router