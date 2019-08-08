**Example:** Render success toaster
```jsx
import { Check as CheckIcon, X as CloseIcon } from 'react-feather';

initialState = {
  visible: false,
  title: 'Toaster Title',
  subtitle: 'Toaster Subtitle',
  hasCloseIcon: true,
  icon: CheckIcon,
  classNames: 'bg-success text-white',
  onToasterDismissed: null
};
<>
 <button onClick={()=> setState({visible:!state.visible})} className="btn btn-primary">Show Toaster</button>

 <Toaster 
   visible={state.visible}
   title={state.title}
   subtitle={state.subtitle}
   hasCloseIcon
   topOffset={0}
   closeIcon={CloseIcon}
   icon={CheckIcon}
   classNames="bg-success text-white"
   onToasterDismissed={()=>setState({visible: false})}
 />
</>
```
