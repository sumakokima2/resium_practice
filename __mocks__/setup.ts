import "raf/polyfill";
// Be sure raf/polyfill is at the first line!

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
