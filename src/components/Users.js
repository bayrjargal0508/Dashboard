import React, { useEffect, useState } from 'react';
import Header from './header';
import deleteIcon from '../assets/bin.png';
import Swal from 'sweetalert2';

function Users() {
  const [addresses, setAddresses] = useState([]);
  const [setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/addresses')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch addresses');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched addresses:', data);
        setAddresses(data);
      })
      .catch(error => {
        console.error('Error fetching addresses:', error);
        setError(error.message);
      });
  }, [setError]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addresses/${id}`, {
          method: 'DELETE'
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete address');
          }
          return response.json();
        })
        .then(data => {
          console.log('Deleted address:', data);
          setAddresses(addresses.filter(address => address._id !== id));
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        })
        .catch(error => {
          console.error('Error deleting address:', error);
          setError(error.message);
        });
      }
    });
  };

  return (
    <div className=''>
      <Header />
      <div className='w-2/3 ml-96 mt-[-50%]'>
        <h1 className='text-lg flex content-center'><b>All Users</b></h1>
        <table className="min-w-full bg-white mt-4">
          <thead>
            <tr>
              <th className="py-2 border">Email</th>
              <th className="py-2 border">Phone</th>
              <th className="py-2 border">District</th>
              <th className="py-2 border">Sub-District</th>
              <th className="py-2 border">Residential Area</th>
              <th className="py-2 border">Apartment Number</th>
              <th className="py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map(address => (
              <tr key={address._id} className="text-center">
                <td className="border px-4 py-2">{address.email}</td>
                <td className="border px-4 py-2">{address.phone}</td>
                <td className="border px-4 py-2">{address.district}</td>
                <td className="border px-4 py-2">{address.subDistrict}</td>
                <td className="border px-4 py-2">{address.residentialArea}</td>
                <td className="border px-4 py-2">{address.apartmentNumber}</td>
                <td className="border px-4 py-2">
                  <img 
                    src={deleteIcon} 
                    alt="Delete" 
                    className="cursor-pointer mx-2 w-6 h-6" 
                    onClick={() => handleDelete(address._id)}  
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
