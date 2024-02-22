import { useForm } from 'react-hook-form'
import Modal from '../ui/Modal'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/features/tasks/taskSlice'

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch()

  const onCancel = () => {
    reset()
    setIsOpen(false)
  }

  const onSubmit = (data) => {
    dispatch(addTask(data))
    onCancel()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Add Your Task'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col mb-5'>
          <label htmlFor='title' className='mb-2'>
            Title
          </label>
          <input
            className='w-full rounded-md'
            id='title'
            type='text'
            required
            {...register('title')}
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='description' className='mb-2'>
            Description
          </label>
          <input
            className='w-full rounded-md'
            id='description'
            type='text'
            required
            {...register('description')}
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='date' className='mb-2'>
            Date
          </label>
          <input
            className='w-full rounded-md'
            id='date'
            type='date'
            required
            {...register('date')}
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='assignTo' className='mb-2'>
            Assign To
          </label>
          <select
            name='assignTo'
            id='assignTo'
            className='rounded-md'
            {...register('assignTo')}>
            <option value='Ahmed'>Ahmed</option>
            <option value='Rayhan'>Rayhan</option>
            <option value='Shawon'>Shawon</option>
          </select>
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='priority' className='mb-2'>
            Priority
          </label>
          <select
            name='priority'
            id='priority'
            className='rounded-md'
            {...register('priority')}>
            <option value='high'>High</option>
            <option value='medium'>Medium</option>
            <option value='low'>Low</option>
          </select>
        </div>
        <div className='flex gap-3 justify-end'>
          <button
            onClick={onCancel}
            type='Submit'
            className='rounded-md btn btn-danger'>
            Cancel
          </button>
          <button type='Submit' className='rounded-md btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default AddTaskModal
