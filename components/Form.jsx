import Link from 'next/link'
import React from 'react'

const Form = ({
  type,
  post,
  handleSumit,
  setPost,
  submitting,
}) => {
  return (
    <section className='w-full max-w-full flext-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>
          {type} Post
        </span>
        <p className='desc  text-left max-w-md'>
          {type} and share amazing prompts with the world
          and let your imagination run wild with AI-powered Platform
        </p>

        <form
          onSubmit={handleSumit}
          className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
        >
          <label htmlFor="">
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Your AI
            </span>
            <textarea value={post.prompt}
              onChange={(e) => {
                setPost({
                  ...post,
                  prompt: e.target.value
                })
              }}
              placeholder='Write your Prompt here' required
              className='form_textarea'
            />
          </label>
          <label htmlFor="">
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Tag <span className='font-normal'>( #insta , #webdev #python)</span></span>
            <input value={post.tag}
              onChange={(e) => {
                setPost({
                  ...post,
                  tag: e.target.value
                })
              }}
              placeholder='hashtag tag' required
              className='form_input'
            />
          </label>
          <div className='flex-end mx-3 mb-5 gap-4'>
            <Link
              href="/"
              className='text-gray-500 text-sm'
            >
              Cancel
            </Link>
            <button type='submit' className='px-5 py-1.5 text-sm text-gray-700 bg-primary-orange rounded-full' disabled={submitting}>
              {submitting ? `${type}...` : type}
            </button>
          </div>
        </form>
      </h1>
    </section>
  )
}
export default Form