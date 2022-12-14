///////////////////////////////////////////////////////////////////primitives
let name: string = 'bob';
console.log(name);

let age: number = 5;
console.log(age);

let developer: boolean = true;
console.log(developer);

const skills: object = {
    languages: "js",
    frameworks: "react"
}
console.log(skills);

let developerChoose: any = NaN;

developerChoose = "make pizza"
console.log(developerChoose);

let userId: number | string | object = "";

userId = 6; 

console.log(userId);

///////////////////////////////////////////////////////////////////////////////////arrays
const arrRandomNumbers: number[] = [4, 4, 78, 6, 21, 434, 8];

const arrNaumbers: Array<number> = [90, 45, 5, 5, 65, 23];

const arrStringsAndNumbers: (string | number)[] = [123, "as", "s", 89];

const arrAnything: (string | number | boolean | object) = [67, 67, "top", true, { price: 67, category: "prodct" }, false];

const arrPrivate: readonly number[] = [2, 3, 4, 5, 78];

const arrGenericPrivate: ReadonlyArray<number> = [2, 3, 45, 54];

const arrAxactData: [number, string, number] = [18, "old", 78];


console.log(arrAxactData);
console.log(arrStringsAndNumbers);
console.log(arrRandomNumbers);
console.log(arrNaumbers);
console.log(arrAnything);
console.log(arrGenericPrivate);
console.log(arrPrivate);


//////////////////////////////////////////////////////types(set of values that variables use)
type ID = number | string

let id: ID = 223123131;
id = "123123123s";
console.log(id);


type Keys = [number, string];

const userSecretKey: Keys = [995662311234, 'lourws'];
console.log(userSecretKey);


//
type LoadingStatus = 'isLoading' | 'pending' | 'success'

let loadingProcess: LoadingStatus = 'isLoading';
loadingProcess = 'success';
// loadingProcess = true; -not work
console.log(loadingProcess);

////////////////////////////////////////////////////////////////interfaces

type IsAvailable = true | false;

interface ProductConfig {
    name: string|number;
    readonly category: string;
    price?: number;
    available: IsAvailable;
};

const product: ProductConfig = {
    category: "phones",
    name: 'Nokia 1100',
    price: 1000,
    available: true
};

product.name = "Siemens SX1"
// product.category = 'TV'

console.log(product);


interface Users {
    [key: string]: number
};

const users = {
    "bob": 55,
    "jayn": 45,
    "bill": 33,
    "jo": 72
};

// users.bill = 'sds'
console.log(users);

const entries = Object.entries(users)
console.log(entries);
let oldestUserYears = 0;
let oldestUser = "";

for (const user of entries) {
    if (user[1] >= oldestUserYears) {
        oldestUser = user[0]
    }
};
console.log(oldestUser);



interface Car {
    model:string
};

interface ModelLine extends Car{
    concern:string
};

const brand: ModelLine = {
    model: "Tesla",
    concern: 'Tesla Company'
}

console.log(brand);

///////////////////////////////////////////////////////////////////enums

enum ShirtSize {
    Small = 'S',
    Medium = 'M',
    Large = 'L',
    Xl = 'XL',
    XXL = 'XXL',
    XXXL = 'XXXL'
}


console.log(ShirtSize.Small);


//////////////////////////////////////////////////////////////////functions

const addStrings = function(a:string|number, b:string|number){
    return a + ' ' + b;
}

const resString = addStrings('Hello', 'TS')
console.log(resString);


const addYears = function(a:number, b:number): number{
    return a + b;
}

const resYears = addYears(2000, 2022);
console.log(resYears);


const addNumders = (x: number, y: number): number => {
    return x + y;
};

const result = addNumders(100, 909);
console.log(result);

function AddAllSrings(a?: string, b?: string, c?: string, ...restParams:any): string {
    const res = a + ' ' + b + ' ' + c 
    console.log(restParams);
    console.log(res);
    return res;
};

const resAddAllSrings = AddAllSrings('this', 'apply', 'call', 'sds');
console.log(resAddAllSrings);



type addAllNumbers = (x: number, y: number, z: number) => number;
const addFunction: addAllNumbers = function (a, b, c) {
    return a + b + c;
};

console.log(addFunction(1,2,4));


type AddArrowFunction = (x: number, y: number, z: number, ...restParams: number[]) => number

//not use on function but you can, "I" prefix - good practice
interface IAddArrowFunction{
    (x: number, y: number, z: number, ...restParams: number[]):number
}

const addArrowFuncrion: AddArrowFunction = (a, b, c, ...restParams) => {
    console.log(restParams);
    return a + b + c;
};

console.log(addArrowFuncrion(1, 3, 5, 6, 7, 8));

const showMessage = (message: string): void => {
    console.log(message);
};
showMessage('TS is Perfect')


type LogMess = (m: string) => void;
const logMess: LogMess = (m) => {
    console.log(m);
};
logMess('Types is good')



enum ScreenSize{
    small = 45,
    medium = 55,
    large = 65
}

interface Itv {
    width: ScreenSize.small| ScreenSize.medium| ScreenSize.large;
    screen: string[];
    // logSize?: () => void;
    logSize?(): void;
    getSize(): number;
    addScreen(message: string): void;

}

const tv: Itv = {
    width: ScreenSize.medium,
    screen: ['LCD', "LED", 'OLED'],
    logSize() {
        console.log(this.width);
    },
    getSize() {
        return this.width
    },
    addScreen(screen) {
        this.screen.push(screen)
    }
}

console.log(tv);

///////////////////////////////////////////////////////////////////////////////classes


interface Params {
    size: string;
    toppings: string[];
}

interface Ipizza{
    size: string;
    // topping: string[];
    // valdiateTopping(topping: string): boolean;
    addTopping(topping: string): void;
}

class Pizza implements Ipizza {
    static names: string = 'sdsd'
    public size: string;
    private toppings: string[];

    constructor({ size, toppings = [] }: Params ) {
        this.size = size;
        this.toppings = toppings;
    }

    private valdiateTopping(topping:string){
        console.log(topping);
        
        // ??????????????????

        return true;
    }

    public addTopping(topping:string) {
        console.log(this.valdiateTopping(topping));
        this.toppings.push(topping);
    }
}

const pizza: Ipizza = new Pizza({ size: "medium", toppings: ["cheese"] });
console.log(pizza);
pizza.addTopping("tomato");

////////////////////////////////////////////////////////////////////////////////generic

const reverse = (array: (number[] | string[] | object[])) => {
    return [...array].reverse();
};

console.log(reverse([1, 2, 3, 4, 5]));


// const reverseOnGeneric = <T>(array: T[]):T[] => {
//     return [...array].reverse();
// };

// console.log(reverseOnGeneric<object>([{1:2}, {2:2}, {3:2}]));

const reverseOnGeneric = <T>(array: T[]) => {
    return [...array].reverse();
};

console.log(reverseOnGeneric([{ 1: 2 }, { 2: 2 }, { 3: 2 }]));


const isEqual = <T, Y>(a: T, b: Y) => {
    return Object.is(a, b)
};

console.log(isEqual(3, 3));
console.log(isEqual("t", "b"));
console.log((isEqual({ b: 1 }, { b: 1 })));


function makeArray <T, B> (x: T, y:B){
    return[x,y]
};

console.log(makeArray(1, 6));
console.log(makeArray('bob', 18));


const restOperation = <T, Y>(firstElement: T, ...restelements:Y[]) => {
    return {firstElement, other:restelements}
}


console.log(restOperation(1, 3, 5, 6, 7, 8));

//////////////////////////////////////////////////////////////////////////////////////Extending generics

// const logLengthArray = <T extends {length:number}>(arr: T) => {
//     console.log(arr.length);
// };
interface Ilength {
    length:number
}

const logLengthArray = <T extends Ilength>(arr: T) => {
    console.log(arr.length);
}; 



logLengthArray([1, 2, 3, 4, 8]);
logLengthArray('232132312313123');
// logLengthArray(5)

interface Icar {
    model: string,
    engine: number|string
}

const createCarName =<T extends Icar>(car:T) => {
    return {
        ...car,
        characteristics: `Model: ${car.model} engine: ${car.engine}`
    }
}

console.log(createCarName({
    model: "audi",
    engine: 5.0,
}));

console.log(createCarName({
    model: "tesla",
    engine: "eco engine",
    price: 20000
}));

/////////////////////////////////////////////////////////////////////////////generics interface


// interface Iuser{
//     id: number| string
// };

// const bill:Iuser = { id: 14 };
// const mayk:Iuser = { id: '234' };

interface User<T>{
    id: T;
};

const bill:User<number> = { id: 14 };
const mayk:User<string> = { id: '234' };

console.log(bill);
console.log(mayk);


interface List<T>{
    id: string;
    position: number;
    active: boolean;
    content: T;
};

const firstList:List<string> = {
    id: '23',
    position: 2,
    active: true,
    content: 'useless'
}

const secondList:List<string[]> = {
    id: '23',
    position: 2,
    active: true,
    content: ["useless", "content"]
}
console.log(firstList);
console.log(secondList);

///////////////////////////////////////////////////examples

type TAnimationState = "playing" | "paused";
type THtppState = "request"|"success"|"error"

const makeState = <S>(initialState:S) => {
    let state = initialState;

    const getState = () => {
        return state;
    };

    const setState = (newState:S) => {
        state = newState;
    };

    return { getState, setState };

};

const animationState = makeState<TAnimationState>('playing');
animationState.setState("paused");
// animationState.setState("request"); error

const htppState = makeState<THtppState>("success");
htppState.setState("request");
htppState.setState("error");
// htppState.setState("playing"); error


export { }

////////////////////////////////////////////////////////////v
interface IAuthService {
  login(): Promise<string>;
  logout(): Promise<boolean>;
}

class FacebookAuthSerivce implements IAuthService {
  login(): Promise<string> {
    // sdasdasasdasdasdasdasdasdasd
    return Promise.resolve('23324234234');
  }
  logout(): Promise<boolean> {
    // sdasdasasdasdasdasdasdasdasd
    return Promise.resolve(true);
  };
}


class LocalAuthSerivce implements IAuthService {
  login(): Promise<string> {
    // sdasdasasdasdasdasdasdasdasd
    return Promise.resolve('22222222');
  }
  logout(): Promise<boolean> {
    // sdasdasasdasdasdasdasdasdasd
    return Promise.resolve(true);
  };
}


interface IHttp {
  baseUrl: string;
  url: string;
  apiVersion: string;
}

class UserHttpSerivce implements IHttp {
  baseUrl: string;

  url: string;

  apiVersion: string;
}

class TodoHttpSerivce implements IHttp {
  constructor(url: string, baseUrl = 'http://localhost:4200', apiVersion = 'api') {
    this.baseUrl = baseUrl;
    this.apiVersion = apiVersion;
    this.url = url;
  }

  baseUrl: string;

  url: string;

  apiVersion: string;

  itemName: string;

  getUrl() {
    return `${this.baseUrl}/${this.apiVersion}/${this.url}`;
  }

  getUrlId(id: string) {
    return `${this.getUrl()}/${id}`;
  }

  async getAll(): Promise<ITodo[]> {
    const { data } = await axios.get(this.getUrl());
    return data;
  }

  async getOne(id: string): Promise<ITodo> {
    const { data } = await axios.get(this.getUrlId(id));
    return data;
  }

  async create(todo: ITodo): Promise<ITodo> {
    const { data } = await axios.post(this.getUrl(), todo);
    return data;
  }

  async update({ id, todo }: UpdateArgs): Promise<ITodo> {
    const { data } = await axios.put(this.getUrlId(id), todo);
    return data;
  }

  async delete(id: string): Promise<void> {
    await axios.delete(this.getUrlId(id));
  }
}

interface UpdateArgs {
  id: string;
  todo: ITodo;
}

const HttpService = new TodoHttpSerivce(QUERY_KEYS.TODOS);

export default HttpService;


const createEntityService = (type: string): IHttp => {
  switch (type) {
    case 'user':
      return new UserHttpSerivce(...);

    case 'todo':
      return new TodoHttpSerivce(...);
    
    // ...... 
  
    default:
      break;
  }
}

const entityType: 'user'| 'todo' = params.type;

const service: IHttp = createEntityService(entityType)

const serviceBaseUrl = service.getUrlId();

console.log(serviceBaseUrl);
