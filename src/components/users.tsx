import { memo } from 'react';
import AddUser from './add-user';
import User from './user';

type UsersProps = {
  users: User[];
};

const Users = ({ users }: UsersProps) => {
  const removeUser = (...args: any[]) => {};

  return (
    <section className="flex flex-col w-full gap-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <AddUser />
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          className="p-2 text-sm border-2 shadow-sm border-primary-600"
        >
          <button
            className="px-1 py-0 font-normal"
            onClick={() => removeUser(user.id)}
          >
            Remove
          </button>
        </User>
      ))}
    </section>
  );
};

export default memo(Users);
