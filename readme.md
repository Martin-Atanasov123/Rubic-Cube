# 🧩 Rubik's Cube Game Online

Welcome to the **Rubik's Cube Game Online**! This project is a 3D Rubik's Cube game made with Three.js and TypeScript, based on HTML. 🎮

## 🌟 Features

- 🧩 **3D Rubik's Cube**: A fully interactive 3D Rubik's Cube.
- 🎨 **Customizable**: Supports custom cube orders (2x2 to 10x10).
- 🚀 **Smooth Animations**: Enjoy smooth and realistic cube rotations.
- 🌐 **Online Play**: Play directly in your browser.

## 📸 Demo

Check out the live demo: [Rubik's Cube - Play Now](https://martin-atanasov123.github.io/rubiks-cube-main/)

## 🛠️ Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Martin-Atanasov123/rubiks-cube.git
    cd rubiks-cube
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm run start
    ```

4. **Open your browser**:
    Open your browser and navigate to `http://localhost:8000`.

## 📂 Project Structure

Here's an overview of the project's structure:
rubiks-cube/ ├── src/ │ ├── index.ts │ ├── rubiks/ │ │ ├── components/ │ │ │ ├── camera.ts │ │ │ ├── renderer.ts │ │ │ └── scene.ts │ │ ├── core/ │ │ │ ├── control.ts │ │ │ ├── cube.ts │ │ │ ├── cubeData.ts │ │ │ ├── cubeState.ts │ │ │ ├── square.ts │ │ │ └── statusbar.ts │ │ ├── util/ │ │ │ ├── math.ts │ │ │ └── transform.ts │ │ └── index.ts ├── out-tsc/ ├── .github/ │ └── workflows/ │ └── gh-pages.deploy.yml ├── .gitignore ├── index.html ├── package.json ├── readme.md ├── rollup.config.js ├── tsconfig.json └── web-dev-server.config.js


## 🚀 Usage

### Changing the Cube Order

You can change the order of the cube (2x2 to 10x10) using the dropdown menu in the UI.



### Restoring the Cube

Click the "Restore" button to reset the cube to its initial state.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](http://_vscodecontentref_/1) file for details.



## 📧 Contact

If you have any questions or feedback, feel free to reach out to me at [matanasov573@gmail.com](mailto:matanasov573@gmail.com).

---

Enjoy solving the Rubik's Cube! 🧩✨
