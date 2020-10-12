export function queryUUID(): string {
  const lastUUID = localStorage.getItem("lastUUID");
  if (!lastUUID || Number.isNaN(parseInt(lastUUID, 10))) {
    const uuid = 1;
    localStorage.setItem("lastUUID", uuid.toString());
    return uuid.toString();
  }
  const uuid = parseInt(lastUUID, 10);
  const newID = (uuid + 1).toString();
  localStorage.setItem("lastUUID", newID);
  return newID;
}
