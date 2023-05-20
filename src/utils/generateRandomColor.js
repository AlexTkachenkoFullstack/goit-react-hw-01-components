export const generateRandomColor=()=>{
  // Генерируем случайные значения для компонентов цвета (RGB)
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // Собираем значения компонентов цвета в формате RGB
  var color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

  return color;
}