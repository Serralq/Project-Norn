{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  languages.python = {
    enable = true;
    package = pkgs.python313.withPackages (
      ps: with ps; [
        mkdocs
        mkdocs-material
        mkdocs-glightbox
        mkdocs-autolinks-plugin
        pillow
        cairosvg
      ]
    );
  };

  packages = [
    pkgs.pngquant # CI parity; only needed if you re-enable the optimize plugin
  ];
}
