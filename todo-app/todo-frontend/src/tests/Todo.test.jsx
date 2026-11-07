// @vitest-environment jsdom

import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import Todo from '../Todos/Todo'

afterEach(() => {
  cleanup()
})
describe('Todo component', () => {
  const todo = {
    text: 'Learn Docker',
    done: false
  }

  it('renders the todo text', () => {
    render(
      <Todo
        todo={todo}
        deleteTodo={() => {}}
        completeTodo={() => {}}
      />
    )

    expect(screen.getByText('Learn Docker')).toBeTruthy()
  })

  it('calls completeTodo when Set as done is clicked', () => {
    const completeTodo = vi.fn()

    render(
      <Todo
        todo={todo}
        deleteTodo={() => {}}
        completeTodo={completeTodo}
      />
    )

    fireEvent.click(screen.getByText('Set as done'))

    expect(completeTodo).toHaveBeenCalledWith(todo)
  })

  it('calls deleteTodo when Delete is clicked', () => {
    const deleteTodo = vi.fn()

    render(
      <Todo
        todo={todo}
        deleteTodo={deleteTodo}
        completeTodo={() => {}}
      />
    )

    fireEvent.click(screen.getByText('Delete'))

    expect(deleteTodo).toHaveBeenCalledWith(todo)
  })
})
