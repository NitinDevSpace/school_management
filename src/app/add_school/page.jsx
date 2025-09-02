"use client";
import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddSchool() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('address', data.address);
      formData.append('city', data.city);
      formData.append('state', data.state);
      formData.append('contact', data.contact);
      formData.append('email_id', data.email);
      if (data.image && data.image[0]) {
        formData.append('image', data.image[0]);
      }

      const response = await fetch('/api/add_school', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to add school');
      }
      alert('School added successfully!');
      reset();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-900">Add New School</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter school name"
              {...register('name', { required: 'Name is required' })}
              className={`mt-1 block w-full rounded-md border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-900">
              Address<span className="text-red-500">*</span>
            </label>
            <input
              id="address"
              type="text"
              placeholder="Enter address"
              {...register('address', { required: 'Address is required' })}
              className={`mt-1 block w-full rounded-md border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 ${
                errors.address ? 'border-red-500' : ''
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-900">
                City<span className="text-red-500">*</span>
              </label>
              <input
                id="city"
                type="text"
                placeholder="Enter city"
                {...register('city', { required: 'City is required' })}
                className={`mt-1 block w-full rounded-md border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 ${
                  errors.city ? 'border-red-500' : ''
                }`}
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-900">
                State<span className="text-red-500">*</span>
              </label>
              <input
                id="state"
                type="text"
                placeholder="Enter state"
                {...register('state', { required: 'State is required' })}
                className={`mt-1 block w-full rounded-md border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 ${
                  errors.state ? 'border-red-500' : ''
                }`}
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-900">
              Contact<span className="text-red-500">*</span>
            </label>
            <input
              id="contact"
              type="text"
              placeholder="Enter contact number"
              {...register('contact', { required: 'Contact is required' })}
              className={`mt-1 block w-full rounded-md border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 ${
                errors.contact ? 'border-red-500' : ''
              }`}
            />
            {errors.contact && (
              <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value:
                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Invalid email address',
                },
              })}
              className={`mt-1 block w-full rounded-md border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-900">
              Upload file<span className="text-red-500">*</span>
            </label>
            <input
              id="image"
              type="file"
              {...register('image', { required: 'Image is required' })}
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-700 
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-md file:border-0
                         file:text-sm file:font-semibold
                         file:bg-indigo-600 file:text-white
                         hover:file:bg-indigo-700"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Add School'}
          </button>
        </form>
      </div>
    </div>
  );
}
