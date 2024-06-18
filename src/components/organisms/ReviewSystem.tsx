'use client'

import { supabaseClient } from '@/lib/supabaseClient'
import React, { useEffect, useState } from 'react'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

interface Review {
  id: number
  name: string
  rating: number
  comment: string
}

interface FormData {
  name: string
  rating: number
  comment: string
}

export default function ReviewSystem() {
  const [reviews, setReviews] = useState<Review[]>([])

  const methods = useForm<FormData>({
    defaultValues: {
      name: '',
      rating: 1,
      comment: '',
    },
  })

  const { control, handleSubmit, reset } = methods

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await supabaseClient.from('Review').select('*')
      setReviews(data || [])
    }

    fetchReviews()
  }, [])

  const onSubmit = async (data: FormData) => {
    const { data: insertedData } = await supabaseClient.from('Review').insert([data])
    setReviews(insertedData || [])
    reset()
  }

  return (
    <div className='mt-8'>
      <h2 className='text-2xl font-semibold mb-4'>Customer Reviews</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            name="name"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    className='border p-2 w-full'
                    required
                  />
                </FormControl>
                <FormDescription>Enter your name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="rating"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='number'
                    min={1}
                    max={5}
                    className='border p-2 w-full'
                    required
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="comment"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comment</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    className='border p-2 w-full'
                    required
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  )
}
