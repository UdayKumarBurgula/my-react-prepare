# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### commands
npx create-react-app my-react-prepare

cd my-react-prepare

npm start

Open http://localhost:3000 to view it in the browser.


### ---
npm install i18next react-i18next i18next-browser-languagedetector --legacy-peer-deps

npm i i18next-http-backend --legacy-peer-deps

### ---
npm install react-router-dom --legacy-peer-deps

Add new translation JSON files per page

We’ll keep your existing common.json and myTranslation.json, 

and add home.json and about.json for each language.

Update src/i18n.js to include page namespaces, 

Add "home" and "about" to your ns and keep common as defaultNS.

src/App.js – combine Router + i18next + pages

### ---
Lazy loading namespaces per route (e.g., only load about namespace when visiting /about)


add draggable

npm install react-beautiful-dnd --legacy-peer-deps

formik and yup

npm install formik --legacy-peer-deps

npm install yup --legacy-peer-deps

### ----------------------------------------------------------------------

### -- code snippet 
https://dev.to/allenarduino/live-coding-react-interview-questions-2ndh

input
------------------------------

<input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a to-do" />

button toggle
------------------------------

<button onClick={() => setIsOn(!isOn)}>

useState for query
------------------------------

 const [query, setQuery] = useState('');

 delete item
 ------------------------------

.splice(index,1)  -- is for delete 

add item 
------------------------------

setTodos([...todos, { text, completed: false }])

update item 
------------------------------

const newTodos = [...todos];
newTodos[index].completed = !newTodos[index].completed;
setTodos(newTodos);

useEffect/ fetch data from API
------------------------------

 useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  filter items
  ------------------------------

  items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  iterative over items
  ------------------------------

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  iterative over items - 1
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  iterative over items - 2
  ------------------------------

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      {isOpen && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );

  iterative over items - 3
  ------------------------------

  return (
    <div>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );

  iterative over items - 4 Tabs
  ------------------------------

  const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

const App = () => {
  const tabs = [
    { label: 'Tab 1', content: <div>Content of Tab 1</div> },
    { label: 'Tab 2', content: <div>Content of Tab 2</div> },
    { label: 'Tab 3', content: <div>Content of Tab 3</div> },
  ];

  return <Tabs tabs={tabs} />;
};


Multstep form
------------------------------

const Step1 = ({ next }) => (
  <div>
    <h2>Step 1</h2>
    <button onClick={next}>Next</button>
  </div>
);

const Step2 = ({ next, previous }) => (
  <div>
    <h2>Step 2</h2>
    <button onClick={previous}>Previous</button>
    <button onClick={next}>Next</button>
  </div>
);

const Step3 = ({ previous }) => (
  <div>
    <h2>Step 3</h2>
    <button onClick={previous}>Previous</button>
    <button type="submit">Submit</button>
  </div>
);

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && <Step1 next={nextStep} />}
      {step === 2 && <Step2 next={nextStep} previous={previousStep} />}
      {step === 3 && <Step3 previous={previousStep} />}
    </form>
  );
};

const App = () => {
  return (
    <div>
      <h1>Multi-Step Form</h1>
      <MultiStepForm />
    </div>
  );
};

socket.io-client
-------------------

npm install socket.io-client --legacy-peer-deps

language switcher
-----------------------

i18n.changeLanguage(lng);
const { t } = useTranslation(['myTranslation']);
return (
    <div>
      <h1>{t("hello")}</h1>
      <p>{t("welcome")}</p>
    </div>
  );



