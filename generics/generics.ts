function anyType<T>(data: T): T {
    return data;
}

var str = anyType<string>("Hello world");
alert(str);

var num = anyType<number>(1);
alert(num);

var arr = anyType<Array<string>>(["Iparra", "John", "Jane"]);
alert(arr.join("|||"));
