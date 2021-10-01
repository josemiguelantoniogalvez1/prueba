import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { CardContainer, Layout } from "../../components";
import { UsersService } from "../../services"

export function UsersPage() {
  const [state, setState] = useState({
    users: [],
    loading: false
  })

  const setLoading = (loading = false) => {
    setState(prevState => ({
      ...prevState,
      loading
    }))
  }

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true)
      try {
        const users = await UsersService.getAll()

        setState(prevState => ({
          ...prevState,
          users
        }))

      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  const columns = [
    { field: 'email', headerName: 'E-mail', width: 200 },
    { field: 'fullName', headerName: 'Nombre completo', width: 300 }
  ]

  return (
    <Layout>
      <CardContainer title="Usuarios">
      <DataGrid
        style={{ minHeight: "500px" }}
        loading={state.loading}
        columns={columns}
        rows={state.users}
        pageSize={5}
        rowsPerPageOptions={[5]} />
      </CardContainer>
    </Layout>
  )
}