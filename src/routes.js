import { lazy } from 'react'

/**
 * Bảng khai báo các trang con.
 * Thêm trang mới: tạo src/pages/<Tên>/<Tên>.jsx rồi thêm 1 dòng vào mảng này.
 * `key` khớp với đường dẫn (/about) hoặc hash (/#about, /#about/...).
 * Không khớp trang nào thì hiển thị trang chủ.
 */
export const routes = [
  {
    key: 'about',
    component: lazy(() => import('./pages/About/About')),
  },
]

export function resolveRoute(location = window.location) {
  const segments = location.pathname.split('/').filter(Boolean)
  const hash = location.hash.replace(/^#\/?/, '')

  return (
    routes.find(
      (route) =>
        segments.includes(route.key) ||
        hash === route.key ||
        hash.startsWith(`${route.key}/`)
    ) ?? null
  )
}
