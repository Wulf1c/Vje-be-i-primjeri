import {
  action,
  makeObservable,
  observable,
  computed,
  runInAction,
} from "mobx";

class UserStore {
  userInfo = [
    {
      id: "1",
      ime: "David",
      hobiji: ["pecanje", "stolni tenis"],
    },
    {
      id: "2",
      ime: "Ivan",
      hobiji: ["nogomet", "rukomet"],
    },
  ];

  editedUserId = null;
  newName = "";
  newHobi = "";

  totalHobi = computed(() => {
    return this.userInfo.reduce((total, user) => total + user.hobiji.length, 0);
  });

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      updateUser: action,
      addHobi: action,
      setEditedUserId: action,
      editedUserId: observable,
      newName: observable,
      newHobi: observable,
    });
  }

  runInAction = (fn) => {
    return runInAction(fn);
  };

  stopEditing = () => {
    this.newName = "";
    this.newHobi = "";
    this.editedUserId = null;
  };

  setEditedUserId = (userId) => {
    this.editedUserId = userId;
  };

  updateUser = (userId, newName) => {
    const userToUpdate = this.userInfo.find((user) => user.id === userId);
    if (userToUpdate) {
      userToUpdate.ime = newName;
    }
  };

  addHobi = (userId, newHobi) => {
    const userToUpdate = this.userInfo.find((user) => user.id === userId);
    if (userToUpdate) {
      userToUpdate.hobiji = [];
      userToUpdate.hobiji.push(...newHobi);
    }
  };
}

export default UserStore;
