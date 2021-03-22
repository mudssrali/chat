import React from 'react'

export interface Props extends React.HTMLProps<HTMLInputElement> {
  error?: string
}

export const TextField: React.FC<Props> = ({error, ...rest}) => {
  return (
    <div className="mb-6">
      <label htmlFor={rest.name} className="block mb-2 text-left text-gray-500 font-semibold">
        {rest.label}
      </label>
      <input
        type="text"
        {...rest}
        className={
          'w-full p-3 placeholder-gray-300 border border-gray-200 rounded-md shadow-md focus:outline-none focus:ring  focus:ring-opacity-50' +
          (!!error ? ' border-red-300 ring-red-300' : '')
        }
      />
      {!!error && <div className="my-2 text-left text-red-400 text-sm">{error}</div>}
    </div>
  )
}
