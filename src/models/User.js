export class User {
  constructor(id, email, name) {
		this.email = email;
		this.id = id;
		this.name = name;
	}
}

export function getUser(user) {
	return new User(user.id, user.email, user.name);
}