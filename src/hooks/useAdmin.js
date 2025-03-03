import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;

        if (email) {
            fetch(`https://hospital-management-9ou8.onrender.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }

            })
                .then(res => res.json())
                .then(data => {

                    setAdminLoading(false);
                    setAdmin(data.admin);
                })
        }
    }, [user])
    return [admin, adminLoading]
}
export default useAdmin;