// RatingModal.tsx
import React from 'react';
import type { GameRating } from '../../../entities/users/types/userTypes';
import './RatingModal.css';

type RatingModalProps = {
  users: GameRating[];
  onClose: () => void;
};

function RatingModal({ users, onClose }: RatingModalProps): JSX.Element {
  // Фильтрация и сортировка пользователей по счету
  const sortedUsers = [...users].sort((a, b) => b.point - a.point);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Рейтинг</h2>
        <ul>
          {sortedUsers.map((user) => (
            <li key={user.id}>
              {user.User.login}: {user.point}
            </li>
          ))}
        </ul>
        <button type="button" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default RatingModal;
