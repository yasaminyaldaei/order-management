interface IDisplayAlert {
  message: string;
}

export function displayAlert({ message }: IDisplayAlert) {
  window.alert(message);
}
