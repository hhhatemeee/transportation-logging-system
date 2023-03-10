import { Container, CssBaseline } from '@mui/material'
import { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { OPTIONS } from './menuConfig'

export const AppLayout: FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const handleOpen = () => setIsOpen(!isOpen)

  return (
    <>
      <CssBaseline />
      <Header onOpen={handleOpen} open={isOpen} />
      <Sidebar options={OPTIONS} open={isOpen} onClose={handleOpen}>
        <Container maxWidth={false}>
          <Outlet />
        </Container>
      </Sidebar>
    </>
  )
}
