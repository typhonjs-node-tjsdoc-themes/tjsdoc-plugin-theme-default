import Theme from 'typhonjs-theme';

/**
 *
 */
export class ThemeDefault extends Theme
{
   constructor()
   {
      super();

      this.addThemeDirName({ dirName: __dirname });

      // Bulk copy all images.
      this.addThemeResource({ action: 'copy', dirName: __dirname, filePath: './images' });

      // Contains `@imports` which must be at the top of a CSS file.
      this.addThemeResource({ action: 'prepend', dirName: __dirname, filePath: 'css/components/layout/fonts.css' });
   }
}

export default new ThemeDefault();
